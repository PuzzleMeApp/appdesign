Meteor.publish("theProfiles",function(){return Profiles.find();});

Meteor.publish("ourpuzzles",function(){return Puzzles.find();});

Meteor.publish("theUsers", function(){return People.find();});


Meteor.publish("alreadytried", function(){return Didpuzzle.find();});

Meteor.publish("theFeedback", function(){return Feedback.find();});

Meteor.publish("theTime", function(){return Time.find();});


Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});

Meteor.publish("images", function(){
	return Images.find();
});


