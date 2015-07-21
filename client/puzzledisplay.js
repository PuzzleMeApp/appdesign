var puzzleID;
var timeStart;
var timeEnd;

Template.puzzledisplay.rendered = function(){
		Session.set("timeStart",(new Date()).getTime());
}


Template.puzzledisplay.events({
'click #submitPuzzle': function(event){
	var timeStart = Session.get("timeStart");
	var puzzleID = $("#puzzleID").val();
	var newUserAnswer = $("#newuseranswer").val().toLowerCase();

	var puzzleObj = Puzzles.findOne({_id:puzzleID}); 		
	var rightAnswer =  puzzleObj.puzzleanswer;
	//var puzzleanswer =
	var didPuzzleAlready = Didpuzzle.find({UserId:Meteor.userId(),puzzleid:puzzleID}).count()>0;


	
		

	
	if (newUserAnswer.toUpperCase() == (Session.get("answer").toUpperCase())) {

		
		if (didPuzzleAlready ==  ""){
			
			timeEnd = (new Date()).getTime();
			var timeDiff = (timeEnd - timeStart)/1000;
			alert(timeDiff);
		}
		var didpuzzle = {UserId:Meteor.userId(), 
			puzzleid:puzzleID};
		Didpuzzle.insert(didpuzzle);
		Router.go('/yay');


	}
	else{alert(2)
		
		Router.go('/boo');
		

		
		var didpuzzle = {UserId:Meteor.userId(), 
			puzzleid:puzzleID};
		Didpuzzle.insert(didpuzzle);

	}

	}









})