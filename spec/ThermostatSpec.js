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

  describe('Power saving', function() {
    it('should not go beyond 25 degrees when in power saving mode', function() {
      expect(thermostat.temperatureUp(10)).toEqual('Max temp in power saving mode is 25 degrees');
    });

    it('should not go beyond 32 degrees when NOT in power saving mode', function() {
      thermostat.powerSavingMode = false;
      expect(thermostat.temperatureUp(15)).toEqual('Max temp is 32 degrees');
    });

    it('should switch from on to off', function() {
      thermostat.powerSavingModeOff()
      expect(thermostat.powerSavingMode).toEqual(false)
    })

    it('should switch from off to on', function() {
      thermostat.powerSavingModeOff()
      thermostat.powerSavingModeOn()
      expect(thermostat.powerSavingMode).toEqual(true)
    })
  });

  describe('Reset', function(){
    it('should reset temp to 20', function(){
      thermostat.temperatureUp(5)
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function(){
    it('should return low-usage for under 18', function(){
      thermostat.temperatureDown(5);
      expect(thermostat.energyUsage()).toEqual('Low usage');
    });
    it('return medium usage between 18 and 25', function(){
      expect(thermostat.energyUsage()).toEqual('Medium usage');
    });
    it('return high usage over 25', function(){
      thermostat.temperatureUp(5);
      expect(thermostat.energyUsage()).toEqual('High usage');
    });

  });

});
