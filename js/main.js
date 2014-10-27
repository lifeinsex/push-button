$(document).ready(function() {
  
  var upSize = 120;
  var downSize = 70;
  var upOffset = (upSize - 100) / 2;
  var downOffset = (100 - downSize) / 2;

  $('.btn-inner').mouseover(function() {

    $(this).animate({ width: upSize + '%', 
                      height: upSize + '%',
                      left: '-' + upOffset + '%',
                      top: '-' + upOffset + '%'}, 100)
  })             
                 .mouseout(function() {

    $(this).animate({ width: '100%', 
                      height: '100%',
                      left: '0',
                      top: '0'}, 80)
  })
                 .mouseup(function() {

    $(this).animate({ width: '100%', 
                      height: '100%',
                      left: '0',
                      top: '0'}, 80)
  })
                 .mousedown(function() {

    $(this).stop(true, true)
           .animate({ width: downSize + '%', 
                      height: downSize + '%',
                      left: downOffset + '%',
                      top: downOffset + '%'}, 50, function() {

                        console.log('Hunting a bug, eh?');
                      })
  });

});