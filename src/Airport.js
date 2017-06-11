function Airport() {
  this.runway = [];
};

Airport.prototype.land = function(plane) {
  if (this.isStormy()) {
    throw "Weather is stormy";
  } else {
  this.runway.push(plane);
  }
};

Airport.prototype.takeOff = function() {
  if (this.isStormy()) {
    throw "Weather is stormy";
  } else {
  this.runway.pop();
  }
};

Airport.prototype.isStormy = function() {
  if (Math.random() < 0.2) {
    return true
  } else {
    return false
  };
};
