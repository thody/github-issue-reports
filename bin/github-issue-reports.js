#! /usr/bin/env node

var packageJson = require('../package.json');
var program = require('commander');

program
  .version(packageJson.version)
  .usage('-o <owner> -r <repo> [-t <token>]')
  .option('-o, --owner <value>', 'owner of the repo')
  .option('-r, --repo <value>', 'name of the repo')
  .option('-t, --token [value]', 'Github API access token')
  .parse(process.argv);

if (!program.owner || !program.repo) {
  program.help();

} else {
  var options = {
    owner: program.owner,
    repo: program.repo,
    token: program.token
  };

  var reporter = require('../src/report-generator');
  reporter.generate(options);
}
