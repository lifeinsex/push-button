$(document).ready(function() {
  
  var upSize = 120;
  var downSize = 85;
  var upOffset = (upSize - 100) / 2;
  var downOffset = (100 - downSize) / 2;
  var shadowDist = 4;
  var shadowOffset = 1.8 * shadowDist;


  $('.btn-inner').css('box-shadow', shadowDist + 'px ' + shadowDist + 'px rgba(0, 0, 0, 0.5)')
                 .mouseover(function() {

    $(this).css('z-index', 600)
           .animate({ width: upSize + '%', 
                      height: upSize + '%',
                      left: '-' + upOffset + '%',
                      top: '-' + upOffset + '%',
                      boxShadow : shadowOffset + "px " + shadowOffset + "px "}, 
                      100)
  })             
                 .mouseout(function() {

    $(this).animate({ width: '100%', 
                      height: '100%',
                      left: '0',
                      top: '0',
                      boxShadow : shadowDist + "px " + shadowDist + "px "},
                      80, 
                      function() {

                        $(this).css('z-index', 500);
                      })
  })
                 .mouseup(function() {

    $(this).animate({ width: '100%', 
                      height: '100%',
                      left: '0',
                      top: '0',
                      boxShadow : shadowDist + "px " + shadowDist + "px "},
                      80,
                      function() {

                        $(this).css('z-index', 500);
                      })
  })
                 .mousedown(function() {

    $(this).stop(true, true)
           .css('z-index', 400)
           .animate({ width: downSize + '%', 
                      height: downSize + '%',
                      left: downOffset + '%',
                      top: downOffset + '%',
                      boxShadow : "0px 0px 0px"}, 50);
  });

});