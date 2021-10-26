import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import styles from "rollup-plugin-styles";
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import url from "rollup-plugin-url";

export default {
  input: "src/index.js",
  output: {
    file: "public/catalog.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    styles(),
    url(),
    svgr(),
    nodeResolve({
      browser: true, 
      preferBuiltins: true,
      extensions: [".js"]      
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' ),
      'preventAssignment' : true
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ["@babel/preset-react"]      
    }),
    commonjs(),
    serve({
      // open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "public" }),
  ]
};
