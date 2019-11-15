
function addition(){
  var first = document.getElementById("firstNumber").value;
  var second = document.getElementById("secondNumber").value;
  var total = parseFloat(first) + parseFloat(second);
  document.getElementById('output').innerHTML = total;
}
