import { getData } from './index.js';
import chai from 'chai';

const { expect } = chai;

// 异步测试
it('should delay 500ms', function (done) {
  var x = true;
  var f = function () {
    x = false;
    expect(x).to.be.not.ok;
    done(); // 通知Mocha测试结束
  };
  setTimeout(f, 500);
});

// http 请求测试
it('should http status return 200', function (done) {
  getData('https://github.com').then(res => {
    expect(res).to.be.equal(200);
    done();
  })
});