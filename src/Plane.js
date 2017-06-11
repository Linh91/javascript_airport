function Plane() {};

Plane.prototype.isLanded = function(runway) {
  if (runway.includes(this)) {
    return true
  } else {
    return false
  }
};
