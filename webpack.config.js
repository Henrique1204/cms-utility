const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const isProduction = argv.mode && argv.mode === 'production';
  const envFilePath = isProduction ? './.env.production' : './.env.local';

  const defaultConfig = singleSpaDefaults({
    orgName: 'henrique1204',
    projectName: 'cms-utility',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    entry: './src/cms-utility.ts',
    output: {
      path: path.resolve(__dirname, 'dist/utility'),
      filename: 'index.js',
    },
    resolve: {
      alias: {
        '@Types': path.resolve(__dirname, 'src/@types'),
        '@Mocks': path.resolve(__dirname, 'src/@mocks'),
        '@Constants': path.resolve(__dirname, 'src/core/constants'),
        '@Libs': path.resolve(__dirname, 'src/core/libs'),
        '@Utils': path.resolve(__dirname, 'src/core/utils'),
        '@UseCases': path.resolve(__dirname, 'src/core/useCases'),
        '@Service': path.resolve(__dirname, 'src/core/service'),
        '@Store': path.resolve(__dirname, 'src/core/store'),
        '@Tests': path.resolve(__dirname, 'src/tests'),
      },
    },
    plugins: [
      new Dotenv({
        path: envFilePath,
      }),
    ],
  });
};
