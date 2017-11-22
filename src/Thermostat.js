var temperatureStart = 20;
const minTemperature = 10;
const maxSaving = 25;
const maxTemp = 32;

function Thermostat(){
  this.temperature = temperatureStart;
  this.minTemperature = minTemperature;
  this.powerSavingMode = true;
};

Thermostat.prototype.temperatureUp = function(degrees) {
  if (this.powerSavingMode === true) {
    if (this.temperature + degrees > maxSaving){
      return 'Max temp in power saving mode is 25 degrees'
    }
    return this.temperature += degrees;
  } else {
      if (this.temperature + degrees > maxTemp){
        return 'Max temp is 32 degrees';
      }
      return this.temperature += degrees;
  };
};

Thermostat.prototype.temperatureDown = function(degrees){
  if((this.temperature - degrees) < minTemperature){
    return "Min temperature is 10 degrees";
  }
  return this.temperature -= degrees;
};

Thermostat.prototype.reset = function(){
  return this.temperature = 20;
}
