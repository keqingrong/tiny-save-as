
var json = {
  bool: true,
  num: 3.14159,
  str: '字符串',
  obj: {
    foo: 'bar'
  }
};
var str = JSON.stringify(json, null, 2) + '\n';
var blob = new Blob([str], { type: 'application/json' });

document.getElementById('download-btn').addEventListener('click', function () {
  saveAs(blob, 'blob.json');
}, false);
