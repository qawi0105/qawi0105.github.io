var input = prompt("enter a number");
var topNum = parseInt(input);
var randomNumber = Math.floor(Math.random() * topNum ) + 1;
var message = "<h2>" + randomNumber +" is the number between 1 and " + topNum + ".</h2>";
document.write(message);