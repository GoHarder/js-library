const c = (t) => typeof t == "boolean", o = (t) => typeof t == "number" && !isNaN(t) && isFinite(t), f = (t) => o(t) && parseInt(`${t}`) === Number(t), a = (t) => typeof t == "object" && Array.isArray(t), y = (t) => typeof t == "object" && !Array.isArray(t), n = (t) => typeof t == "string" && t.trim().length > 0, p = (t) => {
  const s = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return n(t) ? s.test(t) : !1;
}, A = (t) => {
  const s = /^(?=.*[~!@#$%^&*()_\+\-\=])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,15}$/;
  return n(t) ? s.test(t) : !1;
}, g = (t, s) => {
  const r = [];
  for (const e in t)
    s[e](t[e]) || r.push(e);
  return r.length === 0 ? { valid: !0 } : { valid: !1, errors: r };
};
export {
  a as isArray,
  c as isBoolean,
  p as isEmail,
  f as isInteger,
  o as isNumber,
  y as isObject,
  A as isPassword,
  g as isSchema,
  n as isString
};
