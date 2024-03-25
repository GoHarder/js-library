/**
 * A library of math related functions.
 * @packageDocumentation
 */

import { round } from '@vantage-js/math';

/** Creates a fixed time step loop. */
export default class TimeLoop {
  /**
   * The amount of frames to draw in a second.
   */
  #fps;

  /**
   * The result from `window.requestAnimationFrame()`.
   */
  #frame: number | undefined;

  /**
   * The most recent timestamp of the loop execution.
   */
  #time = 0;

  /**
   * The amount of time that's accumulated since the last update.
   */
  #dt = 0;

  /**
   * Whether or not the update function has been called since the last cycle.
   */
  #updated = false;

  /**
   * Creates an instance of an animation time loop.
   * @param fps The frames per second.
   * @param update - The update function.
   * @param render - The update function.
   */
  constructor(fps: number, public update: (time: number) => void, public render: (time: number) => void) {
    this.#fps = round(1000 / fps);
  }

  /**
   * Runs one cycle of the time loop.
   * @param time - The new time stamp.
   */
  #cycle(time: number) {
    /* This ensures that if the the logic runs too long, a new frame will
     * already be requested before 30 or 60 frames pass and miss a request entirely.
     * This could cause a "spiral of death" for my CPU, but since I have the frame dropping
     * safety if statement, this probably won't crash the user's computer. */
    this.#frame = window.requestAnimationFrame((time) => this.#cycle(time));

    this.#dt += time - this.#time;
    this.#time = time;

    /* If the device is too slow, updates may take longer than our set fps.
     * If this is the case, it could freeze and overload the cpu.
     * To prevent this, we catch a memory spiral early and never allow three
     * full frames to pass without an update. This is not ideal, but at least
     * the user won't crash their cpu. */
    if (this.#dt >= this.#fps * 3) this.#dt = this.#fps;

    /* Since we can only update when the screen is ready to draw and requestAnimationFrame
     * calls the run function, we need to keep track of how much time has passed. We
     * store that accumulated time and test to see if enough has passed to justify
     * an update. Remember, we want to update every time we have accumulated one time step's
     * worth of time, and if multiple time steps have accumulated, we must update one
     * time for each of them to stay up to speed. */
    while (this.#dt >= this.#fps) {
      this.#dt -= this.#fps;
      this.update(time);
      this.#updated = true;
    }

    /* This allows the engine to only draw when the game has been updated */
    if (this.#updated) {
      this.#updated = false;
      this.render(time);
    }
  }

  /** Starts the time loop. */
  start() {
    this.#dt = this.#fps;
    this.#time = window.performance.now();
    this.#frame = window.requestAnimationFrame((timeStamp) => this.#cycle(timeStamp));
  }

  /** Stops the time loop. */
  stop() {
    if (this.#frame === undefined) return;
    window.cancelAnimationFrame(this.#frame);
  }
}
