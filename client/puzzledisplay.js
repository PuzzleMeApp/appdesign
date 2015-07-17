Template.puzzledisplay.events({
'click #submitPuzzle': function(event){
	var newUserAnswer = $("#newuseranswer").val();
	
	if (newUserAnswer == (Session.get("answer"))) {
		alert("Correct answer");
	}

	











}
})