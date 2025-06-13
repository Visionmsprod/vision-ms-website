module.exports = function(eleventyConfig) {
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
</details>

<details>
<summary><strong>2. Código Final para `package.json`</strong></summary>
```json
{
  "name": "vision-ms-website",
  "version": "1.0.0",
  "description": "Sitio web para Visión MS Producción Audiovisual",
  "scripts": {
    "start": "npx @11ty/eleventy --serve",
    "build": "npx @11ty/eleventy"
  },
  "devDependencies": {
    "@11ty/eleventy": "^2.0.1"
  }
}
