import './test.css';
import './scss/index.scss';
import { getPpt } from './utils/staticSrc';
const tmp = {
  crateTmp() {
    const el = document.createElement('div');
    el.setAttribute('class', 'webpack-text-css');
    return el;
  }
}

class Test {
  constructor() {
    document.getElementsByTagName('body')[0].appendChild(tmp.crateTmp());
    this.newData = this.initTest();
    this.getPptData();
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
