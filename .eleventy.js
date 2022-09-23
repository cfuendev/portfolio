const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const EleventyLitPlugin = require("@lit-labs/eleventy-plugin-lit");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      clearScreen: false,
      server: {
        mode: "development",
        middlewareMode: true,
      },
      build: {
        mode: "production",
      }
    }
  });
  eleventyConfig.addPlugin(EleventyLitPlugin);

  eleventyConfig.addPassthroughCopy('./src/style');
  eleventyConfig.addPassthroughCopy('./src/scripts');
  eleventyConfig.addWatchTarget('./src/style');
  eleventyConfig.addWatchTarget('./src/scripts');
  eleventyConfig.addFilter('log', (value) => {
    console.log(value);
  });
  eleventyConfig.addFilter('ifzero', (value) => {
    return (value) ? value : 0;
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
