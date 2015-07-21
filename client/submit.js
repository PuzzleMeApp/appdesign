Template.submit.events({
	
 'click #savePuzzle': function(event){
 	var counter=0;
 	var newPuzzleName = $("#newpuzzlename").val();
 	var newPuzzle = $("#newpuzzle").val();
 	var newPuzzleAnswer = $("#newpuzzleanswer").val();
 	
 	
 	

 	$("#newpuzzlename").val("");
 	$("#newpuzzle").val("");
 	$("#newpuzzleanswer").val("");

 	


 	var puzzledata =
 		{puzzlename:newPuzzleName.toLowerCase(),
 			puzzle:newPuzzle,
 			puzzleanswer:newPuzzleAnswer.toLowerCase(),
 			createdAt:new Date(),
 			counter:Session.set("counter",0),
 			

 			


 	
 	};

 	console.dir(puzzledata);

 	Puzzles.insert(puzzledata);





 		}
})