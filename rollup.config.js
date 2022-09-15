import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
  ],
  external: [
    'react',
    'react-dom',
    'react-dnd',
    'prop-types',
    'react-dnd-html5-backend',
    'frontend-collective-react-dnd-scrollzone',
    'react-virtualized',
    'lodash.isequal',
  ],
  plugins: [
    nodeResolve(),
    postcss({ extract: './style.css' }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          typeRoots: ['./src/index.d.ts'],
        },
      },
    }),
  ],
};
