# markdown-magic-local-image

> [Markdown Magic](https://github.com/DavidWells/markdown-magic) plugin to add
> local images to markdown.

## Install

```bash
npm install --save-dev markdown-magic-local-image
```

## Usage

### Example

`markdown.config.js`

```js
module.exports = {
  transforms: {
    LOCALIMAGE: require('markdown-magic-local-image'),
  },
};
```

`README.md`

```md
<!-- AUTO-GENERATED-CONTENT:START (LOCALIMAGE:heading=true&headingLevel=4&include=src/*.svg) -->

<!-- AUTO-GENERATED-CONTENT:END -->
```

Given a folder of svg's:

* _src/add.svg_
* _src/close.svg_
* _src/home.svg_

Yields:

`README.md`

```md
<!-- AUTO-GENERATED-CONTENT:START (LOCALIMAGE:heading=true&headingLevel=4&include=src/*.svg) -->

#### add

![Alt text](src/add.svg "add")

#### close

![Alt text](src/close.svg "close")

#### home

![Alt text](src/home.svg "home")

<!-- AUTO-GENERATED-CONTENT:END -->
```

### Options

#### `heading`

> `boolean`: defaults to `true`

Add a heading, based on the filename, before each image.

#### `headingLevel`

> `number`: defaults to `6`

Control the heading level.

#### `include`

> `string`: defaults to `'./**/*.{gif,jpg,png,svg}'`.

Glob pattern as supported by
[https://github.com/isaacs/node-glob](https://github.com/isaacs/node-glob).
