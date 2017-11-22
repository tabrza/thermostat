describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('intialize', function(){
    it('should start at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('temperatureUp', function(){
    it('should increase the temperature', function(){
      expect(thermostat.temperatureUp(5)).toEqual(25);
    });
  });
});
