var puzzlelikes = $("#likes").val();
//var puzzleId=$("#puzzleId").val();
//var puzzleobj= Puzzles.findOne({_id:puzzleId});
//var likes = puzzleobj.likes;



Template.demoTemp.events(
{
	'click #upvote': function(event) {
		console.log("upvote");
	var checkobj = Likers.findOne({liker:Meteor.userId(),puzzleName:this._id});
	var like_id;
	if (checkobj == undefined) {
		like_id=Likers.insert({liker:Meteor.userId(),puzzleName:this._id,hasDone:"liked"});
		Puzzles.update(this._id,{$inc:{likes:1}});
		$("#countInfo").html(this.likes);
		return;
	}

	like_id=checkobj._id;

	if(checkobj.hasDone == "disliked"){
			console.log("liking");
			Puzzles.update(this._id,{$inc:{likes:2}});
			Likers.update(like_id,{$set:{hasDone:"liked"}});


		}
		console.log(JSON.stringify(Puzzles.findOne(this._id)));
		console.log("likers.findOne"+JSON.stringify(
			Likers.findOne(like_id)));
		
		console.log("checkobj="+JSON.stringify(checkobj));
		

	} ,

  'click #downvote': function(event) {

		console.log("downvote");
	var checkobj = Likers.findOne({liker:Meteor.userId(),puzzleName:this._id});
	var like_id;
	if (checkobj == undefined) {
		like_id = Likers.insert({liker:Meteor.userId(),puzzleName:this._id,hasDone:"disliked"});
		Puzzles.update(this._id,{$inc:{likes:-1}});
		return;
	} 
		like_id = checkobj._id;

		if (checkobj.hasDone == "liked"){
			console.log("disliking");
			Puzzles.update(this._id,{$inc:{likes:-2}});
		Likers.update(like_id,{$set:{hasDone:"disliked"}});
		
		}
		console.log(JSON.stringify(Puzzles.findOne(this._id)));
		console.log("likers.findOne"+JSON.stringify(
			Likers.findOne(like_id)));
		
		console.log("checkobj="+JSON.stringify(checkobj));

		
		

	
  },

	
})
Template.demoTemp.helpers({

})




