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

	
})

