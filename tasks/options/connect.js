module.exports = {
  example: {
    options: {
      hostname: '0.0.0.0',
      port: 6060,
      keepalive: true,
      livereload: true,
      base: '<%= pkg.config.buildDir %>'
    }
  }
};
