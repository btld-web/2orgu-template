import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { PluginOpts, tailwindGlobal, tailwindHMR } from 'stencil-tailwind-plugin';
import tailwind, { setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import replace from 'postcss-replace';
import { default as tailwindTheme } from './tailwind.json';

const STORAGE_URL = 'test'; // TODO use actual url

setPluginConfigurationDefaults({
  ...PluginOpts.DEFAULT,
  stripComments: true,
  tailwindConf: { theme: tailwindTheme } as any,
  postcss: {
    plugins: [
      replace({ data: { STORAGE_URL } })
    ]
  }
});

export const config: Config = {
  namespace: 'csb',
  cacheDir: 'dist/.stencil',
  hashFileNames: false,
  plugins: [
    sass(),
    tailwindGlobal(),
    tailwind(),
    tailwindHMR()
  ],
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      dir: 'dist/www',
      serviceWorker: null, // disable service workers
    },
  ]
};
