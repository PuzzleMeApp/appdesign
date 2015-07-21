var likes=777;
var likes2 = likes;
var hasDowngraded = false;
var hasUpgraded=false;

Template.demoTemp.events(
{
	"click #upvote": function(event) {
		hasUpgraded=true;

		if(hasDowngraded){
			likes++;
		}

		likes++;
		$("#countInfo").html(likes);
		document.getElementById("upvote").disabled=true;
		document.getElementById("downvote").disabled=false;

	} ,

	"click #downvote": function(event) {
		
		hasDowngraded = true;
		if(hasUpgraded){
			likes--;
		}
		likes--;
		$("#countInfo").html(likes);

		document.getElementById("downvote").disabled=true;
		document.getElementById("upvote").disabled=false;
	} 	
})




Template.demoTemp.helpers({
  

  likes: function (){
  	return likes;
  }

}); 