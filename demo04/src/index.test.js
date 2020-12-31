import { getData } from './index.js';
import chai from 'chai';

const { expect } = chai;

describe('一组测试用例', function () {

  // 在本区块的所有测试用例之前执行
  before(function () {
    console.log('before');
  });

  // 在本区块的所有测试用例之后执行
  after(function () {
    console.log('after');
  });

  // 在本区块的每个测试用例之前执行
  beforeEach(function () {
    console.log('beforeEach');
  });

  // 在本区块的每个测试用例之后执行
  afterEach(function () {
    console.log('afterEach');
  });

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
});

