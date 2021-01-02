# tiny-save-as

[![npm version](https://img.shields.io/npm/v/tiny-save-as.svg)](https://www.npmjs.com/package/tiny-save-as)

> A tiny JavaScript utility library for file saving

Live demo available at [here](https://keqingrong.github.io/tiny-save-as/example/).

## Installation

```sh
npm install tiny-save-as
```

The CDN build is also available on unpkg:

- [unpkg.com/tiny-save-as/dist/tiny-save-as.umd.js](https://unpkg.com/tiny-save-as/dist/tiny-save-as.umd.js)
- [unpkg.com/tiny-save-as/dist/tiny-save-as.umd.min.js](https://unpkg.com/tiny-save-as/dist/tiny-save-as.umd.min.js)

## Usage

```js
// Using ES modules
import savaAs from 'tiny-save-as';

// Using ES modules with `import()`
import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
  .then(({default: saveAs}) => {
    saveAs();
  })
  .catch((err) => {
    console.log(err);
  });

// Using CommonJS modules
const savaAs = require('tiny-save-as');
```

## API

```js
savaAs(blob, filename)
```

- **blob**: `Blob` A blob to save.
- **filename**: `string` A file name with a suffix.

## Examples

### Text

```js
const str = `# Lorem ipsum
Lorem ipsum dolor sit amet
Consectetur adipiscing elit
`;
const blob = new Blob([str], { type: 'text/markdown' });
saveAs(blob, 'README.md');
```

### JSON

```js
const json = {
  bool: true,
  num: 3.14159,
  str: '字符串',
  obj: {
    foo: 'bar'
  }
};
const str = JSON.stringify(json, null, 2) + '\n';
const blob = new Blob([str], { type: 'application/json' });
saveAs(blob, 'blob.json');
```

### Canvas

```js
const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 200;
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#f60';
ctx.fill();

// save canvas as PNG image
canvas.toBlob((blob) => {
  saveAs(blob, 'circle.png');
});

// or sava it as JPEG image
canvas.toBlob((blob) => {
  saveAs(blob, 'circle.jpg');
}, 'image/jpeg', 1);
```

### SVG

```js
const str = `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke-width="1" fill="#f60" />
</svg>`;

const blob = new Blob([str], { type: 'image/svg+xml' });
saveAs(blob, 'circle.svg');
```

## Browsers support

| [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.4/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.4/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.4/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.4/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

MIT
