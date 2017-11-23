var thermostat = new Thermostat();

$(document).ready(function(){
  $('#displayTemperature').html(thermostat.temperature);
  $('#displayEnergyUsage').html(thermostat.energyUsage());
  $( "#psOff" ).hide();

  $('#reset').click(function(){
    thermostat.reset();
    $('#displayTemperature').html(thermostat.temperature);
  });

  $('#increase').click(function(){
    thermostat.temperatureUp(1);
    $('#displayTemperature').html(thermostat.temperature);
    $('#displayEnergyUsage').html(thermostat.energyUsage());
  });

  $('#decrease').click(function(){
    try {
      thermostat.temperatureDown(1);
      $('#displayTemperature').html(thermostat.temperature);
      $('#displayEnergyUsage').html(thermostat.energyUsage());
    } catch(err) {
      alert(err);
    }
  });

  $('#psMode').click(function(){
    thermostat.powerSavingModeSwitch();
      if ( thermostat.powerSavingMode === true ) {
        $( "#psOff" ).hide();
        $( "#psOn" ).show();
      } else {
        $( "#psOn" ).hide();
        $( "#psOff" ).show();
      }
    });
});
