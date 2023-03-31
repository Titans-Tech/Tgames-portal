import Bowser from 'bowser';

var device = Bowser.getParser(window.navigator.userAgent);
var devicePlatform = device.parsedResult.platform.type;
var deviceOS = device.parsedResult.os.name;
var deviceOSVer = device.parsedResult.os.version;
console.log(devicePlatform);
console.log(deviceOS, deviceOSVer);

if (deviceOS == 'iOS' && parseInt(deviceOSVer.split('.')[0]) <= 14) {
  $('.bi-box-arrow-up').addClass('d-none');
}

$(window).on('load', function(){

  // $('.list-group-games').css('min-height', $('.list-item').outerHeight() * $('.list-item').length);

  
  $('.bi-box-arrow-up').on('click', function(){
    navigator.share({
      url: window.location.href
    });
  });

});

// Do something with jQuery