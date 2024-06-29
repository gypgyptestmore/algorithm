const Counter = function(){
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function(){
        return changeBy(1);
      },
      decrement: function(){
        return changeBy(-1);
      },
      getValue: function(){
        return privateCounter;
      }
    }
  }
  
  var counterInstance = Counter();
  console.log(counterInstance.getValue()); // 0
  counterInstance.increment();
  counterInstance.increment();
  counterInstance.increment();
  console.log(counterInstance.getValue()); // 3
  counterInstance.decrement();
  console.log(counterInstance.getValue()); // 2
  