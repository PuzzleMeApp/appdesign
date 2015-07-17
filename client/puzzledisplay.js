Template.puzzledisplay.events({
'click #submitPuzzle': function(event){
	var newUserAnswer = $("#newuseranswer").val();

	$("#newuseranswer").val();

	if (newUserAnswer == $(Session.get("answer"))) {
		alert("hi");
	}









}
})