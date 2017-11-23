var thermostat = new Thermostat();

$(document).ready(function(){
  updateTemperature();
  $('#displayEnergyUsage').html(thermostat.energyUsage());
  $( "#psOff" ).hide();

  $('#reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#increase').click(function(){
    thermostat.temperatureUp(1);
    updateTemperature();
    $('#displayEnergyUsage').html(thermostat.energyUsage());
  });

  $('#decrease').click(function(){
    try {
      thermostat.temperatureDown(1);
      updateTemperature();
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

  function updateTemperature() {
    $('#displayTemperature').html(thermostat.temperature + ' &#8451;');
    $('#displayTemperature').attr('class', thermostat.energyUsage());
  }
});
