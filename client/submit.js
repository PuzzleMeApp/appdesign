Template.newquote.events({
 'click #savePuzzle': function(event){
 	var newPuzzleName = $("newpuzzlename").val();
 	var newPuzzle = $("newpuzzle").val();
 	var newPuzzleAnswer = $("newpuzzleanswer").val();

 	$("#newpuzzlename").val("");
 	$("#newpuzzle").val("");
 	$("#newpuzzleanswer").val("");


 	var puzzle =
 		{puzzlename:newpuzzlename,
 			puzzle:newpuzzle,
 			puzzleanswer:newpuzzleanswer,






 		}





 }







})