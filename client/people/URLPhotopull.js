Template.URLPhotopull.events({
	"click #photoSubmit": function(event){
		event.preventDefault();
		var URL = $("#photoURL").val();

		alert(URL);
		
	}
})

Template.URLPhotopull.helpers({
	
	photoURL:function(){ // returns the URL of the gravatar photo for this email
		return URL
	}
})