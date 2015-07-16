Template.submit.events({
 'click #savePuzzle': function(event){
 	var newPuzzleName = $("#newpuzzlename").val();
 	var newPuzzle = $("#newpuzzle").val();
 	var newPuzzleAnswer = $("#newpuzzleanswer").val();

 	$("#newpuzzlename").val("");
 	$("#newpuzzle").val("");
 	$("#newpuzzleanswer").val("");

 	alert(JSON.stringify(newpuzzlename));


 	var puzzledata =
 		{puzzlename:newPuzzleName,
 			puzzle:newPuzzle,
 			puzzleanswer:newPuzzleAnswer};

 	console.dir(puzzledata);

 	Puzzles.insert(puzzledata);





 		}
})