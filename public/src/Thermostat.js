var temperatureStart = 20;
const minTemperature = 10;
const maxSaving = 25;
const maxTemp = 32;
const lowUsage = 18;
const mediumUsage = 25;

function Thermostat(){
  this.temperature = temperatureStart;
  this.minTemperature = minTemperature;
  this.powerSavingMode = true;
};

function Mode() {

}

Mode.prototype = function(maxTemp, error) {
  var modeNode = "";

  return {
    comparison: function(temperature) {
      modeName = "Something"
      return temperature > maxTemp;
    }

    error: error
  }
}

var thermostat = new Thermostat([
  new Mode(25, "Power saving mode is on"),
  new Mode(32, "Max temp is 32")
])

Thermostat.prototype = function(modes) { return {

  var currentMode = modes[0];

  temperatureUp: function(degrees) {
    if (currentMode.comparison(degrees + this.temperature)) {
      return mode.error;
    }
    addDegrees(degrees);
  },

  setCurrentMode: function(index) {
    currentMode = modes[index];
  }

  addDegrees: function(degrees){
    this.temperature += degrees;
  },

  temperatureDown: function(degrees){
    if((this.temperature - degrees) < minTemperature){
      throw "Min temperature is 10 degrees";
    }
    return this.temperature -= degrees;
  },

  reset: function(){
    return this.temperature = temperatureStart;
  },

  energyUsage: function(){
    if(this.temperature < lowUsage) {
      return 'Low-Usage';
    } else if(this.temperature >= mediumUsage) {
        return 'High-Usage';
    } else if( this.temperature < mediumUsage && this.temperature >= lowUsage) {
      return 'Medium-Usage';
    }
  },

  powerSavingModeSwitch: function(){
    if(this.powerSavingMode === false){
      this.powerSavingMode = true
    }else {
      this.powerSavingMode = false
    }
  }
}
};
