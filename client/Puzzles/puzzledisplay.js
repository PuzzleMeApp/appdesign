
var timeStart;
var timeEnd; 
var puzzleObj;
var puzzleID;		
var rightAnswer;
var url;
var hasImage=false;

Template.puzzledisplay.rendered = function(){

		Session.set("timeStart",(new Date()).getTime()),
		
	 // get it from db
	puzzleID = $("#puzzleID").val();
	puzzleObj = Puzzles.findOne({_id:puzzleID}); 		
	url = puzzleObj.image;
	
	if(Puzzles.image!=""){
	$("#puzzleNewImage").attr("src", url);
}
	
	};




Template.puzzledisplay.events({
'click #submitPuzzle': function(event){
	var timeStart = Session.get("timeStart");
	puzzleID = $("#puzzleID").val();
	var newUserAnswer = $("#newuseranswer").val().toLowerCase();

	var puzzleObj = Puzzles.findOne({_id:puzzleID}); 		
	var rightAnswer =  puzzleObj.puzzleanswer;


	var didPuzzleAlready = undefined != Didpuzzle.findOne({UserId:Meteor.userId(),puzzleid:puzzleID});

	//var puzzleanswer =



	
		

	

	if (newUserAnswer.toLowerCase() == (rightAnswer).toLowerCase()) {



		
		if (didPuzzleAlready ==  false){
			
			timeEnd = (new Date()).getTime();
			var timeDiff = (timeEnd - timeStart)/1000;
			var didpuzzle = {UserId:Meteor.userId(), 
			puzzleid:puzzleID};
		 
			Didpuzzle.insert(didpuzzle);

			var timepuzzle = ({time:timeDiff, puzzleid:puzzleID});
			Time.insert(timepuzzle)
			Session.set("time",timeDiff);

			
		}
		;
		
		
		Router.go('/yay');


	}
	else{
		
		Router.go('/boo');
		if (didPuzzleAlready ==  false){
			var didpuzzle = {UserId:Meteor.userId(), 
			puzzleid:puzzleID};
			Didpuzzle.insert(didpuzzle);

			
		}

		
	
		

	}

	},

'click #answerPuzzle':function(event){
	var puzzleObj = Puzzles.findOne({_id:puzzleID}); 		
	var rightAnswer =  puzzleObj.puzzleanswer;
	alert(rightAnswer);



		
	}

	}



)


	


