import { GithubTagsDatasource } from '../../datasource/github-tags';
export { extractPackageFile } from './extract';
export { updateDependency } from './update';

export const url = 'https://brew.sh';

export const defaultConfig = {
  commitMessageTopic: 'Homebrew Formula {{depName}}',
  managerFilePatterns: ['/^Formula/[^/]+[.]rb$/'],
};

export const supportedDatasources = [GithubTagsDatasource.id];
