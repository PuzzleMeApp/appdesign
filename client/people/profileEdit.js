Template.profileEdit.helpers({
	myEmail: function(){
		return this.emails[0].address},
	photo:function(){ 
		return Gravatar.imageUrl(Gravatar.hash(this.emails[0].address,{secure:true}))}
})

Template.profileEdit.events({
	"submit #profile-edit-form": function(event){
		event.preventDefault();
		var bio = event.target.bio.value;
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var age= event.target.age.value;
		var userName=event.target.userName.value;
		
		
		Meteor.users.update(this._id,
			{$set:{'profile.bio':bio, 
					'profile.firstName':firstName, 
					'profile.lastName':lastName,
					'profile.age':age,
					'profile.userName':userName.toLowerCase()}});
		Router.go('/profile/'+this._id);


		
	}
})