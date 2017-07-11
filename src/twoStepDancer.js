//add this to dancefloor.html 
var TwoStepDancer = function( top, left, timeBetweenSteps ) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="twoStepDancer"></span>');
  this.$node = $('<span class="twoStepDancer" > <img class="twoStepDancer" src="https://media.giphy.com/media/NL1WzYqdOduow/giphy.gif"</img> </span>');
  //this.$node.addClass('twoStepDancer');
  //this.$node.removeClass('dancer');
  this.tracker = true;
  this.setPosition(top, left);
};

//set the prototype
TwoStepDancer.prototype = Object.create(makeDancer.prototype);
//set the constructor
TwoStepDancer.prototype.constructor = TwoStepDancer;

TwoStepDancer.prototype.step = function(left) {
  if (arguments[0] !== undefined) {
    timeBetweenSteps = arguments[0];
  }

  this.oldStep = makeDancer.prototype.step;
  // call the old version of step at the beginning of any call to this new version of step  
  this.oldStep(timeBetweenSteps);

  if (this.tracker === false ) {
    this.tracker = true;
  } else if (this.tracker === true ) {
    this.tracker = false;
  } 
  
  if ( this.tracker === true ) {
    var styleSettings = {
      left: '+=50',
    };
  }
  if ( this.tracker === false ) {
    var styleSettings = {
      left: '-=50',
    };
  }

  this.$node.animate(styleSettings);
};
