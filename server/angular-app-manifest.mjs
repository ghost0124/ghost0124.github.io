
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ghost0124.github.io/womans-day/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/womans-day"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 674, hash: 'b1b630c94b33085bd1e20d72ad4e0fe0c2a2386b6b9debf8376f2ab0a276292b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: 'f23b97f197704d7a97cefa6deaf897f9fd9de98e11b0185b808e426081ef5dc1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4775, hash: '95c43a1343e8c4436cc0632ad649f822d43ab0b08532e4bc641e906e8c0e6a79', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IRTP4LPO.css': {size: 77, hash: 'Dp4wwC6I+14', text: () => import('./assets-chunks/styles-IRTP4LPO_css.mjs').then(m => m.default)}
  },
};
