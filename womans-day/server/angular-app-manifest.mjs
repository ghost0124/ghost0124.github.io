
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ghost0124.github.io/ghost0124.github.io/womans-day/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ghost0124.github.io/womans-day"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 694, hash: '20bca25e764b9d8dcf0584f7dab697ee146196a2afbaa7f070dd5c5b26417205', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '42e0afc08b18344a3450caff191419c6b37c80e780d77a18fb8f69907fef40a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4795, hash: '80c3ebd4a4a56e776c1144e5740c87651ca3dc7bea363eb85a9a767e8cf91e30', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IRTP4LPO.css': {size: 77, hash: 'Dp4wwC6I+14', text: () => import('./assets-chunks/styles-IRTP4LPO_css.mjs').then(m => m.default)}
  },
};
