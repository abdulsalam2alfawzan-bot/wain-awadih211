(() => {
  "use strict";
  window.WA = window.WA || {};
  const digits = (value) => String(value || "").replace(/\D/g, "");
  const generate = (length = 6) => {
    const size = length === 4 ? 4 : 6;
    const max = 10 ** size;
    let value;
    if (window.crypto?.getRandomValues) {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      value = array[0] % max;
    } else value = Math.floor(Math.random() * max);
    return String(value).padStart(size, "0");
  };
  const create = (phone, length = 6, ttlMinutes = 5) => {
    const generatedAt = new Date();
    return { phone: digits(phone), code: generate(length), generatedAt: generatedAt.toISOString(), expiresAt: new Date(generatedAt.getTime() + ttlMinutes * 60000).toISOString(), length };
  };
  const verify = (challenge, input, phone) => Boolean(challenge && challenge.phone === digits(phone) && challenge.code === digits(input) && new Date(challenge.expiresAt).getTime() >= Date.now());
  WA.OTP = Object.freeze({ digits, generate, create, verify });
})();
