const a = (t) => {
  let e = 0;
  const r = `${t}`.split(".").at(1);
  return r && (e = r.length), e;
}, s = (t, e, r) => {
  const o = a(e), n = parseFloat(`${t}`).toFixed(20);
  return +`${Math[r](+`${n}e${o}`)}e-${o}`;
}, $ = (t, e = 1) => s(Math.round(t / e) * e, e, "round"), d = (t, e = 1) => s(Math.floor(t / e) * e, e, "floor"), u = (t, e = 1) => s(Math.ceil(t / e) * e, e, "ceil"), c = (t) => t * Math.PI / 180, h = (t) => Math.sin(c(t)), f = (t) => Math.cos(c(t)), M = (t) => Math.tan(c(t)), l = (t, e) => e < 1e-7 ? t : l(e, Math.floor(t % e)), p = (t) => t.reduce((e, r) => e + r) / t.length, g = (t) => t.reduce((e, r) => e + r), i = (t) => {
  const e = parseInt(`${t}`.split(".").at(0));
  let r = 10 ** a(t), o = (t - e) * r;
  const n = l(o, r);
  return o = o / n, r = r / n, { i: e, n: o, d: r };
}, x = (t) => {
  if (t <= 0)
    return '0"';
  const e = d(t / 12), r = i(t % 12);
  let o = r.n ? `${r.n}/${r.d}` : "";
  return o = o && r.i ? `-${o}` : o, o = r.i ? `${r.i}${o}` : o, o = o ? `${o}"` : "", o = e ? `${e}' ${o}` : o, o.trim();
};
export {
  p as average,
  u as ceil,
  f as cos,
  d as floor,
  i as fraction,
  l as gcd,
  x as lengthStr,
  c as radians,
  $ as round,
  h as sin,
  g as sum,
  M as tan
};
