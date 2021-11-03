module.exports = function(eleventyConfig) {

    layout: "layouts/main.njk";

    eleventyConfig.addPassthroughCopy('assets');

    return {
      dir: {
        // ⚠️ These values are both relative to your input directory.
        includes: "_includes",
        layouts: "_layouts",
        output: "docs"
      }
    }
  };