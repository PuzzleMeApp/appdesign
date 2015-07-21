Template.puzzledisplay.events({
'click #submitPuzzle': function(event){
	var newUserAnswer = $("#newuseranswer").val();

	
	if (newUserAnswer.toUpperCase() == (Session.get("answer").toUpperCase())) {
		
		Router.go('/yay');


	}
	else{
		
		Router.go('/boo');
	}










}
})