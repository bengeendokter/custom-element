// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
	input: 'src/custom-element.ts',
	output: {
		file: 'lib/custom-element.js',
		format: 'esm'
	},
	plugins: [typescript(), nodeResolve()]
};