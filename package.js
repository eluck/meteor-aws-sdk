Package.describe({
  summary: "Meteor smart package for AWS SDK node.js package"
});

Npm.depends({
  'aws-sdk': "1.3.1"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');
});