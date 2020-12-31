import { sum } from './index.js';

test.only("should return 3", function () {
  const res = sum(1, 2);
  expect(res).toBe(3);
});

test("should return 8", function () {
  const res = sum(3, 5);
  expect(res).toBe(8);
});


test.skip("should not return 6", function () {
  const res = sum(3, 2);
  expect(res).not.toBe(6);
});

