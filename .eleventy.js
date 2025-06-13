module.exports = function(eleventyConfig) {
  // Definir explícitamente la colección del portafolio
  eleventyConfig.addCollection("portafolio", function(collectionApi) {
    return collectionApi.getFilteredByTag("portafolio").sort(function(a, b) {
      // Ordena por el nombre del archivo, puedes cambiarlo después
      return a.inputPath.localeCompare(b.inputPath);
    });
  });

  // El resto de la configuración permanece igual
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({"src/_redirects": "_redirects"});
  eleventyConfig.addPassthroughCopy("src/logo1.png");
  eleventyConfig.addPassthroughCopy("src/luisk.jpg");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk"
  };
};
