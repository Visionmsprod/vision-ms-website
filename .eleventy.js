module.exports = function(eleventyConfig) {
  
  // --- INSTRUCCIONES DE COPIADO (LA PARTE QUE FALTABA) ---
  // Copia las carpetas completas de css, js, e images al sitio final.
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copia la carpeta de administración
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copia archivos individuales que están en la raíz de 'src'
  eleventyConfig.addPassthroughCopy("src/logo1.png");
  eleventyConfig.addPassthroughCopy("src/luisk.jpg");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  
  // Copia el archivo de redirecciones a la raíz del sitio final
  eleventyConfig.addPassthroughCopy({"src/_redirects": "_redirects"});

  return {
    // --- CONFIGURACIÓN DE DIRECTORIOS ---
    // Le dice a Eleventy dónde encontrar todo.
    dir: {
      input: "src",          // Carpeta principal de trabajo
      includes: "_includes", // Carpeta para plantillas
      data: "_data",         // Carpeta para archivos de datos
      output: "_site"        // Carpeta donde se genera el sitio
    },
    // Asegura que los archivos HTML se procesen como plantillas Nunjucks
    htmlTemplateEngine: "njk"
  };
};
