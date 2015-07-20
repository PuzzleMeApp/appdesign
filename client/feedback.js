Template.submit.events({
	
 'click #savePuzzle': function(event){
 	var counter=0;
 	var newAuthorName = $("#authorname").val();
 	var newFeedback = $("#feedback").val();
 	
 	
 	

 	$("#authorname").val("");
 	$("#feedback").val("");
 	

 	


 	var feedbackdata =
 		{authorname:newAuthorName,
 			feedback:newFeedback,
 			
 			createdAt:new Date(),
 			counter:Session.set("counter",0)
 	
 	};

 	console.dir(puzzledata);

 	Feedback.insert(feedbackdata);





 		}
})