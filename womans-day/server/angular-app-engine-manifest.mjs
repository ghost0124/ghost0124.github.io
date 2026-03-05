
export default {
  basePath: 'https://ghost0124.github.io/ghost0124.github.io/womans-day',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
