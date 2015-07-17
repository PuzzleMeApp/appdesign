Template.URLPhotopull.events({
	"click #photoSubmit": function(event){
		event.preventDefault();
		Session.set("URL",$("#photoURL").val());

		alert(URL);

		
	}
})

Template.URLPhotopull.helpers({
	
	photo:function(){ // returns the URL of the gravatar photo for this email
		return URL
	}
})