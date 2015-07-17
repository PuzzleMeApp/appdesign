Template.profiless.events({
	'change .myFileImput': function(event, template) {
	FS.Utility.eachFile(event, function(file) {
		Images.insert(file, function(err, fileObj) {
			if (err){
				//handle error
			} else {
				//handle success depending what you need to do
			}
			var userId  = Meteor.userId();
			var imagesURL = {
				"profiless.image":
		"/cfs/files/images/" + fileObj._id
				};
				Meteor.users.update(userId, {$set: imagesURL});
			});
		});
	}
})

  