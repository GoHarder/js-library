var m = (i, t, s) => {
  if (!t.has(i))
    throw TypeError("Cannot " + s);
};
var h = (i, t, s) => (m(i, t, "read from private field"), s ? s.call(i) : t.get(i)), a = (i, t, s) => {
  if (t.has(i))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(i) : t.set(i, s);
}, e = (i, t, s, w) => (m(i, t, "write to private field"), w ? w.call(i, s) : t.set(i, s), s);
var p = (i, t, s) => (m(i, t, "access private method"), s);
import { round as l } from "@vantage-js/math";
var r, n, d, o, f, u, c;
class q {
  /**
   * Creates an instance of an animation time loop.
   * @param fps The frames per second.
   * @param update - The update function.
   * @param render - The update function.
   */
  constructor(t, s, w) {
    /**
     * Runs one cycle of the time loop.
     * @param time - The new time stamp.
     */
    a(this, u);
    /**
     * The amount of frames to draw in a second.
     */
    a(this, r, void 0);
    /**
     * The result from `window.requestAnimationFrame()`.
     */
    a(this, n, void 0);
    /**
     * The most recent timestamp of the loop execution.
     */
    a(this, d, 0);
    /**
     * The amount of time that's accumulated since the last update.
     */
    a(this, o, 0);
    /**
     * Whether or not the update function has been called since the last cycle.
     */
    a(this, f, !1);
    this.update = s, this.render = w, e(this, r, l(1e3 / t));
  }
  /** Starts the time loop. */
  start() {
    e(this, o, h(this, r)), e(this, d, window.performance.now()), e(this, n, window.requestAnimationFrame((t) => p(this, u, c).call(this, t)));
  }
  /** Stops the time loop. */
  stop() {
    h(this, n) !== void 0 && window.cancelAnimationFrame(h(this, n));
  }
}
r = new WeakMap(), n = new WeakMap(), d = new WeakMap(), o = new WeakMap(), f = new WeakMap(), u = new WeakSet(), c = function(t) {
  for (e(this, n, window.requestAnimationFrame((s) => p(this, u, c).call(this, s))), e(this, o, h(this, o) + (t - h(this, d))), e(this, d, t), h(this, o) >= h(this, r) * 3 && e(this, o, h(this, r)); h(this, o) >= h(this, r); )
    e(this, o, h(this, o) - h(this, r)), this.update(t), e(this, f, !0);
  h(this, f) && (e(this, f, !1), this.render(t));
};
export {
  q as default
};
