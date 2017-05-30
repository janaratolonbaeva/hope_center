new WOW().init();
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
    }
)


// Progress bars

$('#circle').circleProgress({
    value: 0.6,
    fill: {
      gradient: ["red", "brown"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(30 * progress) + '<i>%</i>');
  });

$('#circle2').circleProgress({
    value: 0.6,
    fill: {
      gradient: ["blue", "green"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(20 * progress) + '<i>%</i>');
  });

$('#circle3').circleProgress({
    value: 0.6,
    fill: {
      gradient: ["gold", "yellow"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
  });