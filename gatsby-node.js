// Add custom webpack to parse .scss
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
  actions.setWebpackConfig({
     module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          }
        ]
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `build-javascript` || stage === `build-html`,
      }),
    ],
  })
}