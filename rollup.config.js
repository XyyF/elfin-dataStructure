/**
 * Created by rengar on 2020/9/24.
 */

// rollup.config.js
export default {
    input: 'main/index.js',
    output: {
        file: 'build/bundle.js',
        format: 'umd',
        name: 'elfinDS',
    },
};