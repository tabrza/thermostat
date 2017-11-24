var thermostat = new Thermostat();

$(document).ready(function(){
  updateTemperature();
  $('#displayEnergyUsage').html(thermostat.energyUsage());
  $( "#psOff" ).hide();
  $.get("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=39f7158b4fbdeec4940041d9e1480b55",function(data){
    console.log(data.main.temp);
  })

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
