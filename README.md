# tiny-save-as

[![npm version](https://img.shields.io/npm/v/tiny-save-as.svg)](https://www.npmjs.com/package/tiny-save-as)

> A tiny JavaScript utility library for file saving

Live demo available at [here](https://rawgit.com/keqingrong/tiny-save-as/master/example/).

## Installation

```sh
$ npm install tiny-save-as
```

The CDN build is also available on unpkg:

- [unpkg.com/tiny-save-as/dist/tiny-save-as.umd.js](https://unpkg.com/tiny-save-as/dist/tiny-save-as.umd.js)
- [unpkg.com/tiny-save-as/dist/tiny-save-as.umd.min.js](https://unpkg.com/tiny-save-as/dist/tiny-save-as.umd.min.js)

## Syntax

```js
savaAs(blob, filename)
```

## Example

```js
import savaAs from 'tiny-save-as';

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

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

MIT
