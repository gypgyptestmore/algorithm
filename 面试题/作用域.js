var a = 10;
function foo() {
  console.log(a);
}
function sum() {
  var a = 20;
  foo();
}
sum();
