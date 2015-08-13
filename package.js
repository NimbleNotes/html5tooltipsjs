Package.describe({
  name: 'ytiurin:html5tooltips',
  version: '1.3.2',
  summary: 'Tooltips with smooth 3D animation (Official)',
  git: 'https://github.com/NimbleNotes/html5tooltipsjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'html5tooltips.css',
    'html5tooltips.animation.css',
    'html5tooltips.js'
  ], 'client');
  api.export('html5tooltips', 'client');
});
