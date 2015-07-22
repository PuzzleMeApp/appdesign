Session.set("showNum",5);

Template.puzzle.helpers({
  

  puzzles: function (){
	  return Puzzles.find({},

                       {limit:Session.get("showNum"),
                        sort:{likes:-1}}
                      ).fetch();
                       },// we are finding all of the quotes on the server to show on the client
  
 showNum: function (){
    return Session.get("showNum");
},

});
  var currentnum = {currentnum:Session.get("showNum")};
 

Template.puzzle.events({
  
  'click button#showMore': function(event){
    Session.set("showNum",2 + Session.get("showNum"))
  },
    'click button#showLess': function(event){
    Session.set("showNum",-2 + Session.get("showNum"))

  },

  'click button#puzzlelink': function(event){
    

    }

     




  

  });








Template.demoTemp.helpers(
{
  alreadyLiked: function(){
    // see if the user is in the list of likers for this quote!
    if (Meteor.user()==undefined)
      return(false);
    
   
    var z = _.contains(this.likers,Meteor.userId());
    console.log("alreadyLiked = "+z);
    return z;},
    
  likers: function(){
      return JSON.stringify(this.likers);
    }})


  /*var alreadyLikedikes = _.contains(this.likers,Meteor.userId());
  console.log("this= "); console.dir(this);

  // if they haven't liked it yet, then add them to the like list and increment the like count.
  if (!alreadyLikes){
    var likers = this.likers;
    likers.push(Meteor.userId());
    Puzzles.update(this._id,{$inc:{counter: 1},$set:{likers:likers}}); 
    counter.insert({user:Meteor.userId(),puzzleName:this._id});
  } else {
    alert("You already liked this post!!!");
  }
  
  }});*/

 
  /*var alreadyLikes = _.contains(this.likers,Meteor.userId());
  

  // if they haven't liked it yet, then add them to the like list and increment the like count.
  if (alreadyLikes){
    var likers = this.likers;
    likers.push(Meteor.userId());
    Puzzles.update(this._id,{$inc:{counter: -1},$set:{likers:likers}}); 
    counter.insert({user:Meteor.userId(),puzzleName:this._id});
  } else {
    alert("You already liked this post!!!");
  }
  
  }, */


 



/*click button.clicker': function (event) {
  counter.update(this._id,{$inc:{c: 1}}); 
  },

'click button.exit': function (event) {
  counter.update(this._id,{$inc:{c: -1}}); 
  }, */



