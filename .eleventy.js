module.exports = function(eleventyConfig) {

  // --- FILTRO PERSONALIZADO PARA EL COTIZADOR ---
  // Esta función le enseña a Eleventy qué significa "filterby"
  eleventyConfig.addFilter("filterby", (collection, key, value) => {
    if (!collection) {
      return [];
    }
    return collection.filter(item => {
        // Asegurarse de que el item y item.data existen
        const data = item.data;
        if(data && data[key] !== undefined) {
            return data[key] === value;
        }
        return false;
    });
  });

  // --- COPIAR ARCHIVOS ESTÁTICOS ---
  // Le dice a Eleventy que copie estas carpetas y archivos a la carpeta final del sitio.
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
