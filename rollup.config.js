// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/index.ts',
    external: ['echarts'],
    plugins: [
        resolve(),
        typescript({
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
        commonjs({
            include: /node_modules/
        }),
    ],
    output: {
        file: 'bundle.js',
        format: 'cjs'
    }
};