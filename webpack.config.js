const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('progress-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    mode: env.mode,
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'index.js',
    },
    target: 'web',
    devServer: {
      port: '8080',
      static: './src',
      open: true,
      hot: true,
      liveReload: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['babel-loader', 'ts-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new ProgressPlugin(true),
    ],
  };
};
