$(window).load(function(){
  var aniplane = function($aniplane,speed){
    planeWidth = $aniplane.width();

    $aniplane.animate({
        "left": "100%"
    }, speed);
};

$(function(){
    aniplane($("#aniplane"), 5000);
});
