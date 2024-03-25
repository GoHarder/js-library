const t = (e) => e.charAt(0).toUpperCase() + e.slice(1), c = (e) => {
  const a = (r) => r.replace("-", "").toUpperCase();
  return e.replace(/(-[a-z])/g, a);
}, p = (e) => (e = e.replace(/(^[A-Z])/, ([a]) => a.toLowerCase()), e.replace(/([A-Z])/g, ([a]) => `-${a.toLowerCase()}`)), s = (e) => {
  const a = (r, o) => +r == 0 ? "" : o === 0 ? r.toLowerCase() : r.toUpperCase();
  return e.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, a);
};
export {
  t as capitalize,
  c as dashToCamelCase,
  s as toCamelCase,
  p as toDashCase
};
