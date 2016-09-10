process.env.NODE_ENV = 'test';

['.css', '.scss', '.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null;
});

require('babel-register')();
