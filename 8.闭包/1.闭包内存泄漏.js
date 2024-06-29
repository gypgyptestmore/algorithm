this.name = 'WindowName'
let myObj = {
  name: 'beast senpai',
  get: function(){
    return function(){
      console.log(this); // WindowName
      return this.name;
    }
  }
}

let myObjname = myObj.get()();
console.log(myObjname); // WindowName
