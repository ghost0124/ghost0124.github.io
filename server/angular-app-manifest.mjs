
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/womans-day/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/womans-day"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 647, hash: 'b578fc017ecea0cfeadb0b3733bb7143de6c7c7d3e35257e188d5186023b9445', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: '868e1f76682d4f559ff3b76fa98dbe74a6c171daa9cf5186bbc5535a2707fd1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4748, hash: '7a89464b3d8fdf8389a9b530dc056df0a56810c16cceb207e57fb7f84b2e3ad5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IRTP4LPO.css': {size: 77, hash: 'Dp4wwC6I+14', text: () => import('./assets-chunks/styles-IRTP4LPO_css.mjs').then(m => m.default)}
  },
};
