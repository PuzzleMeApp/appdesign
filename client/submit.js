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
			likes:0,
			likers:[]

 	
 	};

 	console.dir(puzzledata);

 	Puzzles.insert(puzzledata);





 		}
})