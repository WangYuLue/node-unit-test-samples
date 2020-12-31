import { sum } from './index.js';

test("should return 3", function () {
  const res = sum(1, 2);
  expect(res).toBe(3);
});