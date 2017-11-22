var temperatureStart = 20;

function Thermostat(){
  this.temperature = temperatureStart;
};

Thermostat.prototype.temperatureUp = function(degrees) {
  return this.temperature += degrees;
};
