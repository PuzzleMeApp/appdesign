Template.profiless.events({
	'change .myFileImput': function(event, template) {
	FS.Utility.eachFile(event, function(file) {
		Images.insert(file, function(err, fileObj) {
			if (err){
				console.log("file")
			} else {
			  //images: function () {
				//return Images.find({},
                       //{limit:1
                       //})};
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

  