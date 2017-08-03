const filterSvgProcessor = () => (
  (value) => new Promise((resolve, reject) => {
    const result = value.match(/<svg[\S\s]*<\/svg>/g);

    result ? resolve(result[0]) : reject(new Error('Not found svg element'))
  })
);

export default filterSvgProcessor;
