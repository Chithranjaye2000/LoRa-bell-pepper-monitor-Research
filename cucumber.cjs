
// Also prepare the report directory when running cucumber-js directly.
require('node:fs').mkdirSync('reports', { recursive: true });

module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    import: ['tests/step-definitions/**/*.js'],
    format: [
      'progress',
      'html:reports/cucumber-report.html'
    ]
  }
};
