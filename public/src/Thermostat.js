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

Mode.prototype = function() { return {
    comparisonMaxSaving: function(degrees) {
      return this.temperature + degrees > maxSaving;
    }
  }
}

Thermostat.prototype = function(mode) { return {
  temperatureUp: function(degrees) {
    if (this.powerSavingMode === true) {
      if (mode.comparisonMaxSaving(degrees)){
        return 'Max temp in power saving mode is 25 degrees'
      }
        addDegrees(degrees);
    } else {
        if (this.temperature + degrees > maxTemp){
          return 'Max temp is 32 degrees';
        }
        addDegrees(degrees);
    }
  },



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
