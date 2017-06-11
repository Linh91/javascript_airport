function Weather() {};

Weather.prototype.isStormy = function() {
  if (Math.random() < 0.2) {
    return true
  } else {
    return false
  };
};
