import {
  author,
  name,
  version
} from './package.json';

const banner = `/* @license ${name} v${version} | (c) ${author} */`;

const config = {
  input: 'src/index.js',
  output: [{
      file: `dist/${name}.esm.js`,
      format: 'es',
      banner: banner
    },
    {
      file: `dist/${name}.umd.js`,
      name: 'saveAs',
      format: 'umd',
      banner: banner
    }
  ]
};

export default config;
