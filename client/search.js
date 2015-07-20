
Template.layout.events({
 'click #searchButton': function(event){
 	Session.set("searchData",$("#searchWorking").val()); 
 	Session.set("searchWorking",Puzzles.find({puzzlename:Session.get("searchData")}).fetch());
 	Session.set("searchPeople",People.find({userName:Session.get("searchData")}).fetch());

 	}})

