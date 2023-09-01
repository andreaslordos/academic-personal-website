// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configData = require('src/config.json');

module.exports = {
  // your other webpack configurations like entry, output, etc.
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      title: configData.name,
      description: configData.metaDescription,
    }),
  ],
};
