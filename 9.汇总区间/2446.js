// 时间有交集就算冲突，边界也算，true
var haveConflict = function (event1, event2) {
  let num11 = parseInt(event1[0].replace(':',''));
  let num12 = parseInt(event1[1].replace(':',''));
  let num21 = parseInt(event2[0].replace(':',''));
  let num22 = parseInt(event2[1].replace(':',''));
  console.log(num11,num12,num21,num22)
  if (num12 < num21 || num22 < num11) {
    return false;
  } else {
    return true;
  }
};
let event1 = ["10:13","13:02"],
  event2 = ["13:17","21:38"];
console.log(haveConflict(event1, event2));
