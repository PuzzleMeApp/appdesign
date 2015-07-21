Template.searched.helpers({
	searched: function () {
	  return Session.get("searchWorking"); 
	},
	
	searchusers: function () {
	  return Session.get("searchPeople"); 


	},
	usersearch:function () {
		return Session.get("searchData");


	},
	display:function () {
		return (Session.get("searchData")=="");
	},
	nodisplay:function () {
		return !(Session.get("searchWorking")=="");
	},
	nodisplay1:function () {
		return !(Session.get("searchPeople")=="");
	},
	puzzlecheck:function () {
		if (Session.get("searchWorking") == "") {
 			
 			return "There are no puzzles named ";
 		} else {
 			return "The puzzles that are named ";
 		}},
 	usercheck:function () {
		if (Session.get("searchPeople") == "") {
 			
 			return "There are no users named ";
 		} else {
 			return "The userss that are named ";
 		}},

	

	
	
	
});
	Template.searched.events({
})




