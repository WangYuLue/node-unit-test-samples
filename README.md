## node 单元测试例子

### 1、Mocha 基础调试

参考 demo01，利用了 Node 自带的断言库 `assert`：

用 `mocha src --recursive` 进行单元测试，这里的 `--recursive` 表示递归测试 `src` 下的测试文件；

### 2、Mocha 结合 Chai 断言库使用

参考 demo02；

### 3、Mocha 结合 Chai 断言库请求断言

参考 demo03:

```js
it('should delay 500ms', function (done) {
  var x = true;
  var f = function () {
    x = false;
    expect(x).to.be.not.ok;
    done(); // 通知Mocha测试结束
  };
  setTimeout(f, 500);
});
```

### 4、Mocha 测试用例的钩子

`Mocha` 在 `describe` 块之中，提供测试用例的四个钩子：`before()`、`after()`、`beforeEach()` 和 `afterEach()`，它们会在指定时间执行。

参考 demo04：

```js
describe('some tests', function() {

  before(function() {
    // 在本区块的所有测试用例之前执行
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });

  // test cases
});
```

### 5、Mocha 测试用例管理

大型项目有很多测试用例。有时，我们希望只运行其中的几个，这时可以用 `only` 方法。`describe` 块和 `it` 块都允许调用 `only` 方法，表示只运行某个测试套件或测试用例。

参考 demo05：

```js
// 基础方法测试
it.only("should return 3", function () {
  const res = sum(1, 2);
  expect(res).to.be.equal(3);
});

it("should not return 10", function () {
  const res = sum(5, 2);
  expect(res).to.be.not.equal(10);
});
```

上面代码中，只有带有 `only` 方法的测试用例会运行。

此外，还有skip方法，表示跳过指定的测试套件或测试用例:

```js
// 基础方法测试
it("should return 3", function () {
  const res = sum(1, 2);
  expect(res).to.be.equal(3);
});

it.skip("should not return 10", function () {
  const res = sum(5, 2);
  expect(res).to.be.not.equal(10);
});
```

### 06、Mocha 测试 typescript 代码

使用 `ts-node` 来做 typescript 代码的运行时，与 Mocha 结合使用的脚本如下：

```bash
mocha -r ts-node/register src/*.test.ts
```

上面的脚本无法递归，官方似乎也不支持递归测试 typescript 文件，参考 [issue 4186](https://github.com/mochajs/mocha/issues/4186)、[issue 3115](https://github.com/mochajs/mocha/issues/3115)、[stackoverflow 47447249](https://stackoverflow.com/questions/47447249/mocha-typescript-and-recursively-loading)

于是使用 bash 脚本来递归查找：

```bash
mocha -r ts-node/register $(find src -type f -name '*.test.ts')
```

参考阅读：

[Testing TypeScript with Mocha and Chai](https://dev.to/daniel_werner/testing-typescript-with-mocha-and-chai-5cl8)

[阮一峰：测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)