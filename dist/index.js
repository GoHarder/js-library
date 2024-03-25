const n = (t, u) => {
  let e;
  return (...o) => {
    clearTimeout(e), e = setTimeout(() => {
      t(...o);
    }, u);
  };
}, s = (t, u) => {
  let e;
  return (...o) => {
    e || t(...o), clearTimeout(e), e = setTimeout(() => {
      e = void 0;
    }, u);
  };
}, r = (t, u) => {
  let e = !1, o = null;
  const i = () => {
    o === null ? e = !1 : (t(...o), o = null, setTimeout(i, u));
  };
  return (...l) => {
    if (e) {
      o = l;
      return;
    }
    t(...l), e = !0, setTimeout(i, u);
  };
}, c = (t) => new Promise((u) => setTimeout(u, t));
export {
  n as debounce,
  s as debounceLeading,
  c as sleep,
  r as throttle
};
