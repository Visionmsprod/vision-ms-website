module.exports = function(eleventyConfig) {
  
  // --- FILTRO PERSONALIZADO PARA EL COTIZADOR ---
  eleventyConfig.addFilter("filterby", (collection, key, value) => {
    if (!collection) {
      return [];
    }
    return collection.filter(item => {
        const data = item.data;
        if(data && data[key] !== undefined) {
            return data[key] === value;
        }
        return false;
    });
  });

  // --- COLECCIÓN PERSONALIZADA PARA EL PORTAFOLIO ---
  eleventyConfig.addCollection("portafolio", function(collectionApi) {
    return collectionApi.getFilteredByTag("portafolio").sort((a, b) => {
      return b.date - a.date;
    });
  });
  
  // --- COPIAR ARCHIVOS ESTÁTICOS ---
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({"src/_redirects": "_redirects"});
  eleventyConfig.addPassthroughCopy("src/logo1.png");
  eleventyConfig.addPassthroughCopy("src/luisk.jpg");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  // --- CONFIGURACIÓN DE ELEVENTY ---
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
