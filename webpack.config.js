import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin';

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
  ],
};
