
Template.layout.events({
 'click #searchButton': function(event){
 	Session.set("searchData",$("#searchWorking").val()); 
 	Session.set("searchWorking",Puzzles.find({puzzlename:Session.get("searchData")}).fetch());
 	Session.set("searchPeople",Meteor.users.find({'profile.userName':Session.get("searchData")}).fetch());

 	}})

