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
		Session.set( "age",event.target.age.value);
		Session.set("userName",event.target.userName.value);
		Meteor.users.update(this._id,
			{$set:{'profile.bio':bio, 
					'profile.firstName':firstName, 
					'profile.lastName':lastName,
					'profile.age':Session.get("age"),
					'profile.username':Session.get("userName")}});
		Router.go('/profile/'+this._id);

		var userData = {
			bio:bio,
			firstName:firstName,
			lastName:lastName,
			age:Session.get("age"),
			userName:Session.get("userName"),
			userID:this._id


		}
		People.insert(userData);

		
	}
})