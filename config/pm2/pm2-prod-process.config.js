// cluster mode for production env
module.exports = {
  apps: [
    {
      ...require('./pm2.config'),
      instances: 1,
      exec_mode: 'fork',
      env: {
        PORT: 8080,
        NODE_ENV: 'production',
      },
    },
  ],
};
