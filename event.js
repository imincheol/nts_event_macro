var commentText = "MESSAGE";
var checkHour = 16; // Hour
var checkMinute = 0; // Minute

var cmt = document.getElementById("comment");
cmt.innerHTML = commentText;

var submit = document.getElementById("submit");
//submit.click();

var timerId = setInterval(function(){
  var now = new Date();
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  console.log( hh + ":" + mm + ":" + ss );

  if ( hh >= checkHour && mm >= checkMinute ) {
    console.log( "Clicked! ");
    submit.click();

    clearInterval(timerId);
  }
  
}, 100); // 0.1s
