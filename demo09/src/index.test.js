import { sum } from './index.js';

describe('一组测试用例', function () {
  beforeAll(() => {
    console.log('beforeAll')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
  })

  afterEach(() => {
    console.log('afterEach')
  })

  test("should return 3", function () {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });

  test("should return 8", function () {
    const res = sum(3, 5);
    expect(res).toBe(8);
  });


  test("should not return 6", function () {
    const res = sum(3, 2);
    expect(res).not.toBe(6);
  });
});