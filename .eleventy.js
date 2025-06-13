module.exports = function(eleventyConfig) {
  
  // --- FILTRO PERSONALIZADO PARA EL COTIZADOR ---
  // Esta función le enseña a Eleventy qué significa "filterby" para que el cotizador funcione.
  eleventyConfig.addFilter("filterby", (collection, key, value) => {
    if (!collection) {
      return [];
    }
    return collection.filter(item => {
      const data = item.data;
      if (data && data[key] !== undefined) {
        return data[key] === value;
      }
      return false;
    });
  });

  // --- COLECCIÓN PERSONALIZADA PARA EL PORTAFOLIO ---
  // Esta función le dice a Eleventy: "Crea una colección llamada 'portafolio' con todos los archivos que tengan la etiqueta 'portafolio'".
  // Esto es necesario para que la página del portafolio pueda encontrar y mostrar las imágenes.
  eleventyConfig.addCollection("portafolio", function(collectionApi) {
    return collectionApi.getFilteredByTag("portafolio").sort((a, b) => {
      return b.date - a.date; // Ordena las imágenes de la más nueva a la más antigua
    });
  });
  
  // --- COPIAR ARCHIVOS ESTÁTICOS ---
  // Le dice a Eleventy que copie todas las carpetas y archivos necesarios al sitio final.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({"src/_redirects": "_redirects"});
  eleventyConfig.addPassthroughCopy("src/logo1.png");
  eleventyConfig.addPassthroughCopy("src/luisk.jpg");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  // --- CONFIGURACIÓN DE DIRECTORIOS DE ELEVENTY ---
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
