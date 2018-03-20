function sum(args) {
  let result = 0;
  args.forEach((el) => {
    result += el;
  });
  return result;
}


Function.prototype.myBind = function (context) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);

  return function _boundFn() {
    const callArgs = Array.from(arguments);
    fn.apply(context, bindArgs.concat(callArgs));
  };
};

// currying: partial function application.
// sum.myBind(null, 123).myBind(null, 456).myBind(null, 789)();
//
// const theFunctionThatAdds123 = +(123)
// theFunctionThatAdds123(456)
// theFunctionThatAdds123(789)

Function.prototype.myBind2 = function (context, ...args) {
  return (...otherArgs) => {
    this.apply(context, args.concat(otherArgs));
  };
};



function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach((el) => { total += el; });
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}


// curriedSum(4)(5)(30)(20)(1);
// const sum = curriedSum(2);
// console.log(sum(5)(30)); // => 56


Function.prototype.curry = function (numArgs) {
  let argArr = [];
  let fn = this;
  function _curriedFn(arg) {
    argArr.push(arg);
    if (argArr.length === numArgs) {
      fn.apply(null, argArr);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    return `${this.name} says meow!`;
  }
}

// const gizmo = new Cat('gizmo');
// gizmo.meow()
// const meowerFunction = gizmo.meow;
// meowerFunction.apply(gizmo, []) // manually set this == gizmo
// meowerFunction(); // this == window


Function.prototype.curry2 = function (numArgs) {
  let argArr = [];

  const _curriedFn = (arg) => {
    argArr.push(arg);
    if (argArr.length === numArgs) {
      return this(...argArr);
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};

// const sumCallback = sum.curry2(5)
// document.getElementById('submit-button').addEventHandler((e) => {
//   sumCallback(somevalueextractedfromtheform);
// })

//
// Function.prototype.curry = function (numArgs) {
//   let argArr = [];
//
//   const fn = function (arg) {
//     argArr.push(arg);
//     if(argArr.length === numArgs) {
//       argArr.forEach(el => {fn(el);});
//     } else {
//       return fn;
//     }
//   return fn;
//   };
//
//
// };
