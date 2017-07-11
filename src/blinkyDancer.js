var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //OG//var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer" > <img class="blinkyDancer" src="https://media.giphy.com/media/uVUWIJOCcRUw8/giphy.gif"</img> </span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //OG//var oldStep = blinkyDancer.step;
  //this.oldStep = this.step;
  
  //OG// blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  //OG// return blinkyDancer;
};

//set the prototype
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
//set the constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  //bootleg passing of value timeBetweenSteps
  if (arguments[0] !== undefined) {
    timeBetweenSteps = arguments[0];
  }
  this.oldStep = makeDancer.prototype.step;
  // call the old version of step at the beginning of any call to this new version of step  
  this.oldStep(timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

