function giveAge(){
var age = prompt("What is your age?");
var date = new Date()
var currentYear = date.getFullYear();
var yourYear = currentYear - age;

document.getElementById("year").innerHTML = yourYear;
}
