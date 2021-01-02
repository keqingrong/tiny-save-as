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

  if (typeof URL !== 'undefined' && 'download' in HTMLAnchorElement.prototype) {
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.addEventListener('click', function () {
      // 结束后释放 URL 对象，但如果立即调用 revokeObjectURL 会导致网络错误。
      // 如 Chrome 会提示 "Failed - Network error"，此处放在回调函数中异步处理。
      requestAnimationFrame(function () {
        URL.revokeObjectURL(link.href);
        link.remove();
      })
    }, false);

    // 没有必要调用 document.body.appendChild() 将 link 元素真的添加到页面中。
    // 因为没有添加到页面中，此处调用 link.click() 对 Firefox 来说不会触发下载，
    // 使用 link.dispatchEvent() 代替。
    link.dispatchEvent(new MouseEvent('click'));
    return true;
  }

  // 不支持 IE9 等低版本浏览器和 Safari for iOS、Chrome for iOS 等 iOS 平台浏览器
  console.warn('[tiny-save-as] 该浏览器不支持文件保存'); // eslint-disable-line no-console
  return false;
}

export default saveAs;
