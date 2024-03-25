import { isObject as i } from "@vantage-js/validate";
const f = (e, r) => {
  try {
    return structuredClone(e, r);
  } catch {
    return JSON.parse(JSON.stringify(e));
  }
}, o = (e, ...r) => {
  if (!r.length)
    return e;
  const c = r.shift(), t = f(e);
  if (i(t), i(c))
    for (const n in c) {
      const s = c[n];
      i(s) ? n in t ? t[n] = o(t[n], s) : Object.assign(t, { [n]: s }) : Object.assign(t, { [n]: s });
    }
  return o(t, ...r);
}, b = (e) => Object.keys(e);
export {
  f as clone,
  o as deepMerge,
  b as objectKeys
};
