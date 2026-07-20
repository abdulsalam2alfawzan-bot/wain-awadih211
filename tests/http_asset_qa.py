from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from threading import Thread
from functools import partial
from urllib.request import urlopen
from urllib.parse import quote
import json

root=Path(__file__).resolve().parents[1]
files=[]
for pattern in ('*.html','assets/*.js','assets/*.css','assets/images/*','assets/icons/*'):
    files.extend([p for p in root.glob(pattern) if p.is_file()])
files=sorted(set(files))
server=ThreadingHTTPServer(('127.0.0.1',0),partial(SimpleHTTPRequestHandler,directory=str(root)))
port=server.server_address[1]
Thread(target=server.serve_forever,daemon=True).start()
results=[]; issues=[]
try:
    for path in files:
        rel=path.relative_to(root).as_posix()
        try:
            with urlopen(f'http://127.0.0.1:{port}/'+quote(rel),timeout=5) as response:
                status=response.status; size=len(response.read())
            ok=status==200 and size>0
        except Exception as exc:
            status=0; size=0; ok=False; issues.append({'file':rel,'error':str(exc)})
        results.append({'file':rel,'status':status,'bytes':size,'ok':ok})
        if not ok and not any(x.get('file')==rel for x in issues): issues.append({'file':rel,'status':status,'bytes':size})
finally:
    server.shutdown(); server.server_close()
out={'passed':not issues,'files':len(results),'issues':issues,'results':results}
(root/'tests/http_asset_qa.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
(root/'tests/http_status_geo_google.txt').write_text('\n'.join(f"{r['status']}\t{r['bytes']}\t{r['file']}" for r in results)+'\n',encoding='utf-8')
print(json.dumps({'passed':not issues,'files':len(results),'issues':issues},ensure_ascii=False,indent=2))
raise SystemExit(1 if issues else 0)
