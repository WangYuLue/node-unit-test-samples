import { sum } from './index.js';
import assert from 'assert';

it("should return 3", function () {
  const res = sum(1, 2);
  assert.strictEqual(res, 3);
});