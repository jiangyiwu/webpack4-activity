// 获取某个月份开始时间戳，结束时间戳  最大不得超过当前时间戳 
export function getMonthBeginEndTimestamp(date) {
  const date1 = new Date(date);
  const month = date1.getMonth() + 1;
  const fullYear = date1.getFullYear();
  const strMonth = `0${month}`.slice(-2);
  const startTime = `${fullYear}-${strMonth}-01 00:00:00`;

  // 闰年？
  const leapYear = (fullYear % 4 === 0 && fullYear % 100 !== 0) || (fullYear % 400 === 0);

  let day = 31;
  if (month === 2) day = leapYear ? 29 : 28;
  const smallMonth = [4, 6, 9, 11];
  if (smallMonth.some(item => item === month)) day = 30;
  const endTime = `${fullYear}-${strMonth}-${day} 23:59:59`;

  const startTimestamp = new Date(startTime).getTime();
  const endDate = new Date(endTime).getTime();
  const endTimestamp = endDate > Date.now() ? Date.now() : endDate;

  return { startTimestamp, endTimestamp };
}

export function ajax(url) {
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