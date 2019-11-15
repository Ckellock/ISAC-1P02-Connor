var start = new Date();

function stopTime(){
  var stop = new Date();
  var elapsed = stop.getTime() - start.getTime();
  elapsed = elapsed / 600;
  alert("You have been on the page for:" + " " + elapsed.toFixed(3) + " seconds");
}
