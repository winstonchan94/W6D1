Function.prototype.inherits = function inherits(baseClass) {
  function Surrogate () {}

  Surrogate.prototype = baseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
