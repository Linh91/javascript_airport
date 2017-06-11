describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
    weather.isStormy = function() { return false };
  });

  it('has a default capacity of 10', function() {
    expect(airport.capacity).toBe(10);
  });

  it('prevents takeOff if airport is empty', function() {
    expect( function() { airport.takeOff(plane, weather.isStormy()); } ).toThrow('Airport is empty');
  });

  it('prevents landing if airport is full', function() {
    for (var i = 0; i < 10; i++) {
      airport.land(plane, weather.isStormy());
    }
    expect( function() { airport.land(plane, weather.isStormy()); } ).toThrow("Airport is full");
  });

  it('contains a plane after landing', function() {
    airport.land(plane, weather.isStormy());
    expect(airport.runway).toContain(plane);
  });

  it('takes off planes', function() {
    airport.land(plane, weather.isStormy());
    airport.takeOff(plane, weather.isStormy());
    expect(airport.runway).toEqual([]);
  });

  it('prevents takeoff in stormy weather', function() {
    airport.land(plane, weather.isStormy());
    weather.isStormy = function() { return true };
    expect( function() { airport.takeOff(plane, weather.isStormy()); } ).toThrow("Weather is stormy");
  });

  it('does not prevent takeoff in unstormy weather', function() {
    airport.land(plane, weather.isStormy());
    expect( function() { airport.takeOff(plane, weather.isStormy()); } ).not.toThrow("Weather is stormy");
  });

  it('prevents landing in stormy weather', function() {
    weather.isStormy = function() { return true };
    expect( function() { airport.land(plane, weather.isStormy()); } ).toThrow("Weather is stormy");
  });
});
