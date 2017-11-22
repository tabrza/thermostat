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

  describe('temperatureDown', function(){
    it('should decrease the temperature', function(){
      expect(thermostat.temperatureDown(5)).toEqual(15);
    });

    it('should not decrease below 10 degrees', function(){
      expect(thermostat.temperatureDown(15)).toEqual('Min temperature is 10 degrees');
    });
  });


});
