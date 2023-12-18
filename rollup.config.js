import typescript from '@rollup/plugin-typescript';

/* Type Definitions
 * --------------------------------------------------------------- */

/** @typedef {import('rollup').RollupOptions} RollupOptions */

/** @type {import('@rollup/plugin-typescript').RollupTypescriptOptions} */
const typescriptOpts = {
  compilerOptions: {
    declaration: false,
    removeComments: true,
  },
};

const packages = ['array', 'math', 'object', 'string', 'time-loop', 'timing', 'validate'];

const builds = packages.map((pack) => {
  /** @type {import('rollup').RollupOptions} */
  return {
    input: `src/${pack}/index.ts`,
    output: {
      file: `packages/${pack}/index.js`,
      exports: 'named',
      compact: true,
    },
    plugins: [typescript(typescriptOpts)],
  };
});

/* Export Builds
 * --------------------------------------------------------------- */

export default builds;
