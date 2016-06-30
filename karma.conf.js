module.exports = function(config) {
  config.set({
    browsers: ["PhantomJS"],
    frameworks: ["jasmine"],
    files: [
      "assets/conf.js",
      "generated/test.js"
    ]
  });
};
