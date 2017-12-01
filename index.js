const glob = require('glob');
const path = require('path');

const defaults = {
  heading: true,
  headingLevel: 6,
  include: './**/*.{gif,jpg,png,svg}',
};

module.exports = function LOCALIMAGE(content, _options, config) {
  const settings = Object.assign({}, defaults, _options);
  const basePath = path.resolve(path.dirname(config.originalPath));
  const pattern = path.join(basePath, settings.include);

  return glob
    .sync(pattern, {
      ignore: '**/node_modules/**',
    })
    .map(filePath => {
      const imageName = path.basename(filePath, path.extname(filePath));
      const imageSrc = path.relative(basePath, filePath);

      return [
        JSON.parse(settings.heading)
          ? `${Array(Number(settings.headingLevel))
              .fill('#')
              .join('')} ${imageName}`
          : null,
        `![Alt text](${imageSrc} "${imageName}")`,
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');
};
