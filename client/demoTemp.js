var puzzlelikes = $("#likes").val();
var newLikes=$("#newLikes").val();
var likes=Puzzles.likes;
var hasDowngraded = false;
var hasUpgraded=false;

Template.demoTemp.events(
{
	"click #upvote": function(event) {
		hasUpgraded=true;

		if(hasDowngraded){
			Puzzles.update(this._id,{$inc:{likes:1}});
		}
			Puzzles.update(this._id,{$inc:{likes:1}});

		$("#countInfo").html(likes);
		document.getElementById("upvote").disabled=true;
		document.getElementById("downvote").disabled=false;

	} ,

	"click #downvote": function(event) {
		
		hasDowngraded = true;
		if(hasUpgraded){
			Puzzles.update(this._id,{$inc:{likes:-1}});

		}
			Puzzles.update(this._id,{$inc:{likes:-1}});

		$("#countInfo").html(likes);

		document.getElementById("downvote").disabled=true;
		document.getElementById("upvote").disabled=false;
	} 	
})




