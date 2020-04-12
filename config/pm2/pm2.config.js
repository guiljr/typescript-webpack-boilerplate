module.exports = {
  name: 'webpack-typscript-api',
  script: 'build/main.bundle.js',
  watch: true,
  ignore_watch: ['node_modules'],
  exp_backoff_restart_delay: 100,
  combine_logs: true,
  merge_logs: true,
  error_file: 'logs/err.log',
  out_file: 'logs/out.log',
  time: true,
};
