import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import replace from 'postcss-replace';

const STORAGE_URL = 'test'; // TODO use actual url

export const config: Config = {
  namespace: 'btld',
  cacheDir: 'dist/.stencil',
  hashFileNames: false,
  plugins: [
    sass(),
    postcss({
      plugins: [replace({ data: { STORAGE_URL } })]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      dir: 'dist/www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'pages' }
      ]
    },
  ]
};
