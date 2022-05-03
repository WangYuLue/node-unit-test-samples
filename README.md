## node 单元测试例子

### 1、Mocha 基础调试

参考 demo01，利用了 Node 自带的断言库 `assert`：

用 `mocha src --recursive` 进行单元测试，这里的 `--recursive` 表示递归测试 `src` 下的测试文件；

### 2、Mocha 结合 Chai 断言库使用

参考 demo02；

### 3、Mocha 结合 Chai 断言库异步请求

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

参考阅读：

[阮一峰：测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

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

此外，还有 `skip` 方法，表示跳过指定的测试套件或测试用例:

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

参考阅读：

[阮一峰：测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

### 6、Mocha 测试 typescript 代码

使用 `ts-node` 来做 typescript 代码的运行时;

安装依赖：

```bash
yarn add ts-node @types/chai @types/mocha -D
```

与 Mocha 结合使用的脚本如下：

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

### 7、Jest 基础调试

参考 demo07，这里需要借助 `babel` 来进行 ESModule 形式的导入。

```bash
yarn add --dev babel-jest @babel/core @babel/preset-env
```

添加 `babel.config.js` 文件：

```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

参考链接：

[JEST Docs: using-babel](https://jestjs.io/docs/en/getting-started.html#using-babel)

### 8、Jest 异步请求

一共有 3 种方式，参考 demo08：

第一种：如果是异步请求，可以使用 done 来结束：

```js
test("dealy 500ms return 3", function (done) {
  const res = sum(1, 2);
  var f = function () {
    expect(res).toBe(3);
    done(); // 通知Mocha测试结束
  };
  setTimeout(f, 500);
});
```

第二种：如果是 promise，可以直接返回这个 promise：

```js
test('【Promise】should http status return 200', function () {
  return getData('https://github.com').then(res => {
    expect(res).toBe(200);
  })
});
```

第三种：也可以使用 await，看上去更优雅：

```js
test('【async】should http status return 200 (Promise)', async function () {
  const res = await getData('https://github.com');
  expect(res).toBe(200);
});
```

参考链接：

[JEST Docs: asynchronous](https://jestjs.io/docs/zh-Hans/asynchronous)

### 9、Jest 测试用例钩子

与 Mocha 的钩子函数类似，不过将 `before` 换成了 `beforeAll`，`after` 换成了 `afterAll`；

参考 demo09：

```js
describe('some tests', function () {
  beforeAll(function() {
    // 在本区块的所有测试用例之前执行
  });

  afterAll(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });

  // test cases
})
```

### 10、Jest 测试用例管理

和 Mocha 类似， Jest 有 `only` 、`skip` 方法来管理测试用例；

`only` 表示只运行某个测试套件或测试用例；`skip` 表示跳过指定的测试套件或测试用例；

详情参考 demo10;

### 11、Jest 测试 typescript 代码

`jest` 测试 typescript 代码相对简单;

安装依赖：

```bash
# babel 相关转换插件
yarn add --dev @babel/preset-typescript 
# typescript 类型提示
yarn add --dev @types/jest
```

修改 `babel.config.js` 配置文件：

```diff
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+   '@babel/preset-typescript',
  ],
};
```

详情参考 demo10;

参考文档：

[Jest Docs: using-typescript](https://jestjs.io/docs/en/getting-started#using-typescript)

## 其他

### Jest 与 Mocha 对比

个人一些见解：

#### (1)、断言库

`Mocha` 需要配合其他断言库使用，例如 `chai`；
`Jest` 自带断言库；

这方面 `Jest` 使用更简单；

#### (2)、指定测试文件

`Mocha` 需要指定单元测试文件；
`Jest` 会自动找到项目目录下的测试文件；

这方面 `Jest` 使用更简单；

#### (3)、对异步的处理

`Mocha` 使用 `done` 函数来通知测试结束；
`Jest` 使用 `done` 函数、返回 `Promise`、使用 `async` 来通知测试结束；

这方面 `Jest` 处理更多样；

#### (4)、对 ES Module 的支持

`Mocha` 原生支持 ES Module 导入；
`Jest` 需要借助与 Babel 来转换代码；

这方面 `Mocah` 使用更简单；

#### (5)、对 typescript 的支持

`Mocha` 借助 ts-node 来运行 typescript 代码；
`Jest` 借助 babel 插件来转换 typescript 代码再运行；

两者使用体验上差不多；
