
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'womans-day',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/womans-day"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 443, hash: 'f6bb8539bbee9c4749be61f5f211baf6c511d3e9c5a46af7ce76d6cf9c83a3f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 956, hash: 'cfd6c55089449eb5e7af638f4e6f1a2363849c0c8dc93a0e3117b3db4c567a41', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
