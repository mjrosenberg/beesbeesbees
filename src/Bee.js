import {Grub} from ./Grub.js;
var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing'
};

Bee.prototype = Object.create(Grub.prototype);
Bee.constructor = Bee;

