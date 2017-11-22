var temperatureStart = 20;
const minTemperature = 10;

function Thermostat(){
  this.temperature = temperatureStart;
  this.minTemperature = minTemperature;
};

Thermostat.prototype.temperatureUp = function(degrees) {
  return this.temperature += degrees;
};

Thermostat.prototype.temperatureDown = function(degrees){
  if((this.temperature - degrees) < minTemperature){
    return "Min temperature is 10 degrees";
  }
  return this.temperature -= degrees;
};
