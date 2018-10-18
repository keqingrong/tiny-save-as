'use strict';

/**
 * 文件保存
 * @param {Blob} blob
 * @param {string} filename
 * @returns {boolean}
 */
function saveAs(blob, filename) {
  // Microsoft Edge/IE 10+
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return true;
  }

  if ('download' in HTMLAnchorElement.prototype) {
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.addEventListener('click', function () {
      // 结束后释放 URL 对象，但如果立即调用 revokeObjectURL 会导致网络错误
      // 如 Chrome: "Failed - Network error"
      requestAnimationFrame(function () {
        URL.revokeObjectURL(link.href);
        link.remove();
      })
    }, false);

    link.dispatchEvent(new MouseEvent('click'));
    return true;
  }

  // IE9/Safari for iOS/Chrome for iOS
  console.warn('该浏览器不支持文件保存'); // eslint-disable-line no-console
  return false;
}

export default saveAs;
