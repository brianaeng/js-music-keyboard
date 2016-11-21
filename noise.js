$(document).ready( function() {
  var choices = ["c", "d", "e", "f", "g", "a", "b"];

  //For clicks
  $("button").click(function(){
    var note = ($(this).attr("class")).slice(-1);

    if (choices.includes(note) === true) {
      var element = note + "Audio";
      var audio = document.getElementById(element);
      // alert("PLAYING " + element);
      audio.play();
    }
  });
  //For keys
  $("body").keydown(function(event){
    if (choices.includes(event.key) === true) {
      var element = event.key + "Audio";
      var audio = document.getElementById(element);
      // alert("PLAYING " + element);
      audio.play();
   }
  });
});


//Past solution
// $(".c").click(function() {
//   var audio = document.getElementById("cAudio");
//   audio.play();
// });
// $(".d").click(function() {
//   var audio = document.getElementById("dAudio");
//   audio.play();
// });
// $(".e").click(function() {
//   var audio = document.getElementById("eAudio");
//   audio.play();
// });
// $(".f").click(function() {
//   var audio = document.getElementById("fAudio");
//   audio.play();
// });
// $(".g").click(function() {
//   var audio = document.getElementById("gAudio");
//   audio.play();
// });
// $(".a").click(function() {
//   var audio = document.getElementById("aAudio");
//   audio.play();
// });
// $(".b").click(function() {
//   var audio = document.getElementById("bAudio");
//   audio.play();
// });
