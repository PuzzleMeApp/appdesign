Template.submit.events({
 'click #savePuzzle': function(event){
 	var newPuzzleName = $("#newpuzzlename").val();
 	var newPuzzle = $("#newpuzzle").val();
 	var newPuzzleAnswer = $("#newpuzzleanswer").val();
 	 Session.set("answer",$("#newpuzzleanswer").val());
 	var reset = 1

 	$("#newpuzzlename").val("");
 	$("#newpuzzle").val("");
 	$("#newpuzzleanswer").val("");

 	


 	var puzzledata =
 		{puzzlename:newPuzzleName,
 			puzzle:newPuzzle,
 			puzzleanswer:newPuzzleAnswer,
 			createdAt:new Date(),
 			reset:1
 	};

 	console.dir(puzzledata);

 	Puzzles.insert(puzzledata);





 		}
})