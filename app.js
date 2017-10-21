var inquirer = require("inquirer");
var letters = require("./letters");
var words = require("./words");
var Game() = function() {

};

inquirer.prompt([
	{
    type = "input",
    name = "ready",
    message = "Ready to play? (Y/N)",
	} 
	{
	type = "input",
	name = "guess",
	message = "Guess a letter!",
	}
	{
	type = "input",
	name = "replay",
	message = "Play again?",
	}
]).then(function(guess){

});

function setAnswer()
{
	var Board = '';
	answer = undefined;
	while(answer === undefined)
	{
		answer = import(wordList[Math.floor(Math.random() * wordList.length)];
	}
	for (var i = 0; i < answer.length; i++) {
		gameBoard[i] = "*";
		Board = Board + gameBoard[i] + ' ';
	}