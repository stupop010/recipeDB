const path = require("path");

module.exports = {
  assetsDir: "../static",
  baseUrl: "",
  publicPath: undefined,
  outputDir: path.resolve(__dirname, "../app/templates"),
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  devServer: {
    proxy: {
      "/api": {
        target: "https://hidden-cove-79704.herokuapp.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
