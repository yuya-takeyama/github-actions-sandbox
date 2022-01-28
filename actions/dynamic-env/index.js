const appendFileSync = require('fs').appendFileSync;
const core = require('@actions/core');

const secrets = JSON.parse(core.getInput('secrets', { required: true }));
const envMaps = {
  foo: {
    ENV_1: 'FOO_ENV_1',
  },
  bar: {
    ENV_1: 'BAR_ENV_1',
    ENV_2: 'BAR_ENV_2',
  },
};

const envFile = process.env.GITHUB_ENV;
const envMap = envMaps[core.getInput('envName', { required: true })];

for (const kv of Object.entries(envMap)) {
  const envName = kv[0];
  const secretName = kv[1];

  core.info(`Exporting a secret ${secretName} as an environment variable ${envName}`);
  core.exportVariable(envName, secrets[secretName]);
}
