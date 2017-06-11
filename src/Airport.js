function Airport(capacity = 10) {
  this.runway = [];
  this.capacity = capacity;
};

Airport.prototype.land = function(plane) {
  if (this.isStormy()) {
    throw "Weather is stormy";
  } else if (this.runway.length == 10) {
    throw "Airport is full";
  } else {
    this.runway.push(plane);
  }
};

Airport.prototype.takeOff = function() {
  if (this.isStormy()) {
    throw "Weather is stormy";
  } else if (this.runway.length == 0) {
    throw "Airport is empty";
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
