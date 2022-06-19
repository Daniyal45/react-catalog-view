import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import {terser} from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import styles from "rollup-plugin-styles";
import pkg from './package.json';
import svgr from '@svgr/rollup';
import url from "rollup-plugin-url";

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs', plugins: [terser()] },
        // { file: "./dist/catalog.esm.js", format: 'esm', plugins: [terser()] } // for testing build
    ],
    plugins: [
        styles(),
        url(),
        svgr(),
        external(),
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime',
            plugins: ["@babel/plugin-transform-runtime"]
        })        
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
