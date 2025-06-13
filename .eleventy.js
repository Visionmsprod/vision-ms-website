module.exports = function(eleventyConfig) {
  // Copia directorios estáticos
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copia archivos individuales de la raíz
  eleventyConfig.addPassthroughCopy("src/logo1.png");
  eleventyConfig.addPassthroughCopy("src/luisk.jpg");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy({"src/_redirects": "_redirects"});

  // Filtro personalizado para el cotizador
  eleventyConfig.addFilter("filterby", (collection, key, value) => {
    if (!collection) return [];
    return collection.filter(item => item.data[key] === value);
  });

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
