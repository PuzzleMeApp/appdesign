
Template.feedbacklist.helpers({
  newfeedback: function () {
	  console.log("Getting feedback")
	  return Feedback.find({},{ 
          sort:{createdAt:-1}}
	  	); 
  }


});

  
