module.exports = {
  apps: [
    {
      ...require('./pm2.config'),
      instances: 2,
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
    },
  ],
};
