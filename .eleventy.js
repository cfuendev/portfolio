module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/style');
  eleventyConfig.addPassthroughCopy('./src/scripts');
  eleventyConfig.addPassthroughCopy('./src/pics');
  eleventyConfig.addWatchTarget('./src/style');
  eleventyConfig.addWatchTarget('./src/scripts');
  eleventyConfig.addWatchTarget('./src/pics');
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
