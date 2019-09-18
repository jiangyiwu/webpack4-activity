// import './test.css';
// import './scss/index.scss';
import { getPpt } from './utils/staticSrc';
const md5 = require('md5');
const secretKey = 'df7f14da21';
const userid = '15915804399';
const ts = Date.now();
const sign = md5(`${secretKey}${userid}${secretKey}${ts}`);
console.info(ts, 'ts', sign, 'sign');
const tmp = {
  crateTmp() {
    const el = document.createElement('div');
    el.setAttribute('class', 'webpack-text-css');
    el.innerHTML = `http://123.net/watch/c4664863?userid=${userid}&ts=${ts}&sign=${sign}&custom=1231`;
    return el;
  }
}

class Test {
  constructor() {
    document.getElementsByTagName('body')[0].appendChild(tmp.crateTmp());
    // this.newData = this.initTest();
    // this.getPptData();
    this.updateUl();
  }

  updateUl() {
    const ul = document.getElementById('node-ul');
    const fragment = this.getChild(ul);
    Array.prototype.slice.call(fragment).forEach((item) => {
      console.info(item, 'fragment-child');
    });
  }

  getChild(el) {
    let child;
    const fragment = document.createDocumentFragment();
    fragment.appendChild(document.createElement('p'));
    // while (child = el.firstChild) {
    //   if (el.firstChild.nodeType === 1) {
    //     fragment.appendChild(child);
    //   }
    // }
    console.info(el.firstChild, fragment.firstChild.nodeType, '---fragment');
    return fragment;
  }

  getPptData() {
    const vid = '09891838128319322183sdfasdf_1';
    const autoId = '134209';
    const path = '/test/assets/ppt/';
    getPpt(path, vid, autoId).then((res) => {
      console.log(res, 'res');
    });
    // console.log(pptData, 'this.pptData');
  }

  initTest() {
    const data = { name: 'zhangsan', age: 24 };
    return Object.assign(data, { sex: 'male' });
  }
}

new Test();
