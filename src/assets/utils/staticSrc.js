function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject('microsoft.XMLHttp');
    xhr.open('get', url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          resolve(xhr.responseText);
        } else {
          reject(new TypeError('文件读取失败'));
        }
      } 
    }
  });
}

function replaceUrl(data, absolutePath = '') {
  absolutePath = absolutePath || '/assts/vid/ppt/'
  const rgx = /[^\/]+(?!.*\/)/g;
  if (typeof data === 'string') {
    return `${absolutePath}${data.match(rgx).join()}`;
  }
  if (data instanceof Array) {
    data.forEach((item, index, arr) => {
      arr[index] = `${absolutePath}${item.match(rgx).join()}`;
    });
    return data;
  }
}

export function getPpt(aPath, vid, autoId) {
  const vidPath = `${aPath}${vid}/${autoId}/`;
  const url = `${vidPath}/${autoId}.json`;
  const imgurl = `${vidPath}/images/`;
  const smallImg = `${vidPath}/smallImages/`;
  return ajax('test.json').then((res) => {
    // console.log(res, 'res');
    const data = JSON.parse(res).data;
    data.convertFileJson.images = replaceUrl(data.convertFileJson.images, imgurl);
    data.convertFileJson.smallImages = replaceUrl(data.convertFileJson.smallImages, smallImg);
    // data.convertFileJson.htmlUrl = replaceUrl(data.convertFileJson.htmlUrl, absolutePath);
    return { data };
  });
}
