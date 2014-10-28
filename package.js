Package.describe({
  summary: 'SDK for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF',
  version: '2.0.23.1',
  git: 'https://github.com/eluck/meteor-aws-sdk.git'
});

Npm.depends({
  'aws-sdk': '2.0.23'
});

Package.on_use(function (api) {
  api.export('AWS');
  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['eluck:aws-sdk', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
