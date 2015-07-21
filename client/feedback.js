Template.feedback.events({
	
 'click #saveFeedback': function(event){
 	console.log("You clicked the button!");
 	var newAuthorName = $("#authorname").val();
 	var newFeedback = $("#newfeedback").val();
 	
 	
 	

 	$("#authorname").val("");
 	$("#newfeedback").val("");
 	

 	


 	var feedbackdata =
 		{authorname:newAuthorName,
 			feedback:newFeedback,
 			
 			createdAt:new Date()
 			
 	
 	};

 	console.dir(feedbackdata);

 	Feedback.insert(feedbackdata);





 		}
})