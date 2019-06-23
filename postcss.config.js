module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 45,
      propList:['*'],
      replace: true
    }
  }
}
