module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/style');
  eleventyConfig.addWatchTarget('./src/style');
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
