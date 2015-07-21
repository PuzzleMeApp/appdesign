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

	var didPuzzleAlready = undefined != Didpuzzle.findOne({UserId:Meteor.userId(),puzzleid:puzzleID});


	
		

	
	if (newUserAnswer.toLowerCase() == (rightAnswer).toLowerCase()) {

		
		if (didPuzzleAlready ==  false){
			
			timeEnd = (new Date()).getTime();
			var timeDiff = (timeEnd - timeStart)/1000;
			var didpuzzle = {UserId:Meteor.userId(), 
			puzzleid:puzzleID};
		 
			Didpuzzle.insert(didpuzzle);

			var timepuzzle = ({time:timeDiff, puzzleid:puzzleID});
			Time.insert(timepuzzle);

			
		}
		;
		
		
		Router.go('/yay');


	}
	else{alert(2)
		
		Router.go('/boo');
		if (didPuzzleAlready ==  false){
			var didpuzzle = {UserId:Meteor.userId(), 
			puzzleid:puzzleID};
			Didpuzzle.insert(didpuzzle);
			
		}

		
	
		

	}

	}









})