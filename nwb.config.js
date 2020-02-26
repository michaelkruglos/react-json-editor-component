module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    umd: false
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ["./demo/src/index.tsx"]
      }
      if (!config.resolve.extensions) {
        config.resolve.extensions = ['.js', '.jsx']
      }
      config.resolve.extensions.push(".ts", ".tsx");
      config.module.rules.push({
        "test": /\.tsx?$/,
        "loader": "awesome-typescript-loader"
      });

      config.devServer = { ...config.devServer, overlay: true, hot: true };
      return config;
    }
  },
  karma: {
    testFiles: [
      "tests/*-test.ts",
      "tests/*-test.tsx",
    ]
  }
}
