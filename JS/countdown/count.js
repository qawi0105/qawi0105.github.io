var questions = 3;
var questionsleft = '[' + questions + ' questions left]';
var adjective = prompt('Please insert an adjective.' + questionsleft);
questions -= 1; 
questionsleft = '[' + questions + ' questions left]';
var verb = prompt('Please insert a verb.' + questionsleft);
questions -= 1;
questionsleft = '[' + questions + ' questions left]';
var noun = prompt('Please insert a noun.' + questionsleft);
questions -= 1;
questionsleft = '[' + questions + ' questions left]';
document.write('you write ' + adjective + verb + noun + questions);


//Please type and 
//noun ,verb, adjective