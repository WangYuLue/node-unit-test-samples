import { sum } from './index.js';
import chai from 'chai';

const { expect } = chai;

// 基础方法测试
it.only("should return 3", function () {
  const res = sum(1, 2);
  expect(res).to.be.equal(3);
});

it("should not return 10", function () {
  const res = sum(5, 2);
  expect(res).to.be.not.equal(10);
});
