var first
var secondNumber
var total
function addition(){
  var first = document.getElementById("firstNumber").value;
  var second = document.getElementById("secondNumber").value;
  var total = parseFloat(first) + parseFloat(second);
  document.getElementById('output').innerHTML = total;

}
function subtraction(){
  var first = document.getElementById("firstNumber").value;
  var second = document.getElementById("secondNumber").value;
  var total = parseFloat(first) - parseFloat(second);
  document.getElementById('output').innerHTML = total;

}
function multiplication(){
  var first = document.getElementById("firstNumber").value;
  var second = document.getElementById("secondNumber").value;
  var total = parseFloat(first) * parseFloat(second);
  document.getElementById('output').innerHTML = total;

}
function division(){
  var first = document.getElementById("firstNumber").value;
  var second = document.getElementById("secondNumber").value;
  var total = parseFloat(first) / parseFloat(second);
  document.getElementById('output').innerHTML = total;

}
