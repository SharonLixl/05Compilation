var diceIndex = 0;

$(document).ready(function(){

  // mouseenter
  $('#block').mouseenter(function(){
    console.log('hovered')

    $('#dice').removeClass('rotate');
    $('#dice').addClass('blinkin');

  // random color
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    console.log(red + ',' + green + ',' + blue);
    $('#dice').css({'background-color': 'rgb(' + red + ',' + green + ',' + blue + ')'});

  // show dice number
    var index = Math.floor(Math.random() * 5) + 1;
    diceIndex = index
    console.log(diceIndex);
    $('#block div:nth-child('+ index +')').show();
    $('#titleHolder div:nth-child('+ index +')').show();


  })

  // mouseout
  $('#block div').mouseout(function(){
    for(var i =1; i < 6 ; i++){
      $('#block div:nth-child('+ i +')').hide();
      $('#titleHolder div:nth-child('+ i +')').hide();
    }
    console.log('mouseout')
    $('#dice').addClass('rotate');
    $('#dice').removeClass('blinkin');
  })

  // setup link
  $('#block div:first-child').click(function () {
    window.open('https://sharonlixl.github.io/01Lyrics/','_blank');
  })

  $('#block div:nth-child(2)').click(function () {
    window.open('https://sharonlixl.github.io/02-De-DesignSystems/','_blank');
  })

  $('#block div:nth-child(3)').click(function () {
    window.open('https://sharonlixl.github.io/03Timeline/','_blank');
  })

  $('#block div:nth-child(4)').click(function () {
    window.open('https://sharonlixl.github.io/04PortfolioSite/','_blank');
  })

  $('#block div:nth-child(5)').click(function () {
    window.open('https://sharonlixl.github.io/E2AnimatingPoster/','_blank');
  })

  $('#block div').hover(function(){
    console.log('hovered on one');
    $(this).css({'cursor': 'pointer'});
  })

})
