import { sum, getData } from './index.js';

// 异步请求（使用 done 来结束）
test("dealy 500ms return 3", function (done) {
  const res = sum(1, 2);
  var f = function () {
    expect(res).toBe(3);
    done(); // 通知Mocha测试结束
  };
  setTimeout(f, 500);
});

// http 请求测试 （如果是 promise，可以直接 return 这个 promise）
test('【Promise】should http status return 200', function () {
  return getData('https://github.com').then(res => {
    expect(res).toBe(200);
  })
});

// http 请求测试 （也可以使用 await，看上去更优雅）
test('【async】should http status return 200 (Promise)', async function () {
  const res = await getData('https://github.com');
  expect(res).toBe(200);
});
