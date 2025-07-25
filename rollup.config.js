import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import renameNodeModules from 'rollup-plugin-rename-node-modules';
import postcss from 'rollup-plugin-postcss';
import InlineSvg from 'rollup-plugin-inline-svg';
import copy from 'rollup-plugin-copy';

export default {
  input: ['./src/**/index.ts'],
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    multiInput(),
    resolve(),
    renameNodeModules(),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
        { src: 'LICENSE', dest: 'dist' },
        { src: 'src/root.css', dest: 'dist' },
        { src: 'src/assets', dest: 'dist' },
        { src: 'src/scss', dest: 'dist' },
      ],
    }),
    InlineSvg(),
    typescript(),
    postcss({
      inject: false,
    }),
    terser(),
  ],
};
