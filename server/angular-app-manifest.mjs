
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 636, hash: '46d12260392083a758f635f35b92e9f09c2e558cb89a5ec40ba6cc627f8b6586', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '9b07e2f775f85263c7c5dbbcc6b2521aa096f03829b9af6bceb13ea89d604905', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4737, hash: '60c8fc95412098bb253c7b99363924dfd9f89c62d55dc07a0e7cdc1c14de206c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IRTP4LPO.css': {size: 77, hash: 'Dp4wwC6I+14', text: () => import('./assets-chunks/styles-IRTP4LPO_css.mjs').then(m => m.default)}
  },
};
