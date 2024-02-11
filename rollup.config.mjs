// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import litCss from 'rollup-plugin-lit-css';

export default {
	input: 'src/custom-element.ts',
	output: {
		file: 'lib/custom-element.js',
		format: 'esm'
	},
	plugins: [
		nodeResolve(),
		litCss({include: ["src/**/*.css"]}),
		typescript()]
};