import './test.css';
const tmp = {
  crateTmp() {
    const el = document.createElement('div');
    el.setAttribute('class', 'webpack-text-css');
    el.innerHTML = '<h3>Hello world</h3>';
    return el;
  }
}

class Test {
  constructor() {
    console.log(12312, tmp.crateTmp());
    document.getElementsByTagName('body')[0].appendChild(tmp.crateTmp());
  }
}

new Test();
