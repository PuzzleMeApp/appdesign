Session.set("showNum",5);

Template.puzzle.helpers({
  puzzle: function () {
	  return Puzzle.find({},
                       {limit:Session.get("showNum"),
                        sort:{createdAt:-1}}
                      ); // we are finding all of the quotes on the server to show on the client
  },
  showNum: function(){
    return Session.get("showNum");
  },

  puzzles: function(){return Puzzles.find();}
});
  var currentnum = {currentnum:Session.get("showNum")};


Template.puzzle.events({
  
  'click button#showMore': function(event){
    Session.set("showNum",2 + Session.get("showNum"))
  },
    'click button#showLess': function(event){
    Session.set("showNum",-2 + Session.get("showNum"))
  }
 

});
