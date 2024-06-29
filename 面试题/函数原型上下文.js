// 2 4 1 1 2 3
// 函数声明、函数表达式、原型方法以及对作用域和上下文的操作
function Foo() {
  getName = function () {
    alert(1);
  };
  return this;
}

// 构造函数 Foo 添加了一个静态方法 getName
Foo.getName = function () {
  alert(2);
};

//  Foo 的原型对象上定义了一个方法 getName
Foo.prototype.getName = function () {
  alert(3);
};

// 函数表达式，声明了一个全局变量 getName，赋值为一个函数，变量声明中的初始化（如赋值为函数表达式）在执行时会覆盖函数声明。
var getName = function () {
  alert(4);
};
// 函数声明，由于 JavaScript 函数声明提升（hoisting），
// 这个函数实际上是最先被声明的，但是被上面的函数表达式覆盖了。
function getName() {
  alert(5);
}

// 调用
Foo.getName(); //调用的是 Foo 对象上静态定义的 getName 方法
getName(); //找到的是最近的 getName 定义，即函数表达式，
Foo().getName(); //Foo() 调用中，getName 被重新定义为 alert(1)，且由于 Foo 函数中的 return this; 返回的是全局对象（非严格模式下）。因此，此时的 getName 方法已经被改写，当 Foo().getName(); 执行时，弹出的是 1。

getName(); //前面 Foo() 执行时已经修改了全局的 getName，因此再次调用 getName(); 时，弹出的是 1。
new Foo.getName(); //表达式相当于 new (Foo.getName)();，调用的是 Foo 的静态方法 getName 但用于构造一个新的对象。在 JavaScript 中，如果构造函数没有返回值或返回非对象值，new 表达式结果是新创建的对象。因为 alert(2) 仍被执行，但返回值是 undefined，所以最终结果看起来没有变化，仍然弹出 2。
new Foo().getName(); //首先创建 Foo 的一个新实例，然后调用原型上的 getName 方法，因此弹出的是 3。
