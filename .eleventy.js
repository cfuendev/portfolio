module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/style');
  eleventyConfig.addWatchTarget('./src/style');
  eleventyConfig.addFilter('log', (value) => {
    console.log(value);
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};

