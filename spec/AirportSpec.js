describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('has a default capacity of 10', function() {
    expect(airport.capacity).toBe(10);
  });

  it('contains a plane after landing', function() {
    airport.isStormy = function() { return false };
    airport.land(plane);
    expect(airport.runway).toContain(plane);
  });

  it('takes off planes', function() {
    airport.isStormy = function() { return false };
    airport.land(plane);
    airport.takeOff();
    expect(airport.runway).toEqual([]);
  });

  it('prevents takeoff in stormy weather', function() {
    airport.isStormy = function() { return false };
    airport.land(plane);
    airport.isStormy = function() { return true };
    expect( function() {airport.takeOff(); } ).toThrow("Weather is stormy");
  });

  it('does not prevent takeoff in unstormy weather', function() {
    airport.isStormy = function() { return false };
    airport.land(plane);
    expect( function() {airport.takeOff(); } ).not.toThrow("Weather is stormy");
  });

  it('prevents landing in stormy weather', function() {
    airport.isStormy = function() { return true };
    expect( function() { airport.land(plane); }).toThrow("Weather is stormy");
  });
});
