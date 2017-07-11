// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  //dancer.$node = $('<span class="dancer"></span>');
  this.$node = $('<span class="dancer"></span>');

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // dancer.step();
  this.step(timeBetweenSteps);

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //dancer.setPosition(top, left);
  this.top = undefined;
  this.left = undefined;
  this.setPosition(top, left);

  //return dancer;
};

makeDancer.prototype.step = function() {
  //bootleg passing of value timeBetweenSteps
  if (arguments[0] !== undefined) {
    timeBetweenSteps = arguments[0];
  }
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  
  var styleSettings = {
    position: 'absolute',
    top: '100px',
    left: '100px',
  };

  // var styleSettings2 = {
    
  // };

  this.$node.animate(styleSettings);

  this.$node.addClass('dancerLine');
};

makeDancer.prototype.lineOut = function() {

  this.$node.removeClass('dancerLine');
  var styleSettings = {
//    position: 'absolute',
    top: this.top,
    left: this.left,
  };

  this.$node.animate(styleSettings);  
};