var puzzleObj = Puzzles.findOne({_id:puzzleID}); 		
var rightAnswer =  puzzleObj.puzzleanswer;


Template.answerDisplay.helpers({
	  puzzles: function (){
	  	var puzzleObj = Puzzles.findOne({_id:puzzleID}); 		
		var rightAnswer =  puzzleObj.puzzleanswer;
	  	return rightAnswer;
	  }

	
	


})