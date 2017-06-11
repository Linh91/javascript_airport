describe('Plane', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('confirms plane is landed', function() {
    airport.isStormy = function() { return false };
    airport.land(plane);
    expect(plane.isLanded(airport.runway)).toBe(true);
  });

  it('confirms plane is not landed', function() {
    airport.isStormy = function() { return false };
    expect(plane.isLanded(airport.runway)).toBe(false);
  });
});
