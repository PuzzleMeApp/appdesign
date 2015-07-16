Template.submit.events({
 'click #savePuzzle': function(event){
 	var newPuzzleName = $("newpuzzlename").val();
 	var newPuzzle = $("newpuzzle").html();
 	var newPuzzleAnswer = $("newpuzzleanswer").val();

 	$("#newpuzzlename").val("");
 	$("#newpuzzle").html("");
 	$("#newpuzzleanswer").val("");


 	var puzzle =
 		{puzzlename:newpuzzlename,
 			puzzle:newpuzzle,
 			puzzleanswer:newpuzzleanswer,






 		}





 }







})