/**
 * A library of math related functions.
 * @packageDocumentation
 */
/** Creates a fixed time step loop. */
export default class TimeLoop {
    #private;
    update: (time: number) => void;
    render: (time: number) => void;
    /**
     * Creates an instance of an animation time loop.
     * @param fps The frames per second.
     * @param update - The update function.
     * @param render - The update function.
     */
    constructor(fps: number, update: (time: number) => void, render: (time: number) => void);
    /** Starts the time loop. */
    start(): void;
    /** Stops the time loop. */
    stop(): void;
}
