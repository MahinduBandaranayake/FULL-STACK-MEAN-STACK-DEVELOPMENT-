module.exports = {
  resolve: {
    fallback: {
      "bufferutil": "bufferutil",
      "utf-8-validate": "utf-8-validate",
      "net": "net-browserify",
      "tls": "tls-browserify",
      "crypto": "crypto-browserify",
      "http": "stream-http",
      "https": "https-browserify",
      "url": "url",
      "zlib": "browserify-zlib"
    }
  }
};