Template.submit.events({
	
 'click #savePuzzle': function(event){
 	var counter=0;
 	var newPuzzleName = $("#newpuzzlename").val();
 	var newPuzzle = $("#newpuzzle").val();
 	var newPuzzleAnswer = $("#newpuzzleanswer").val();
 	 Session.set("answer",$("#newpuzzleanswer").val());
 	
 	

 	$("#newpuzzlename").val("");
 	$("#newpuzzle").val("");
 	$("#newpuzzleanswer").val("");

 	


 	var puzzledata =
 		{puzzlename:newPuzzleName,
 			puzzle:newPuzzle,
 			puzzleanswer:newPuzzleAnswer,
 			createdAt:new Date(),
 			counter:Session.set("counter",0)
 	
 	};

 	console.dir(puzzledata);

 	Puzzles.insert(puzzledata);





 		}
})