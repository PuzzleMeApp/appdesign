Session.set("showNum",5);

Template.puzzle.helpers({
  quotes: function () {
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



Template.puzzle.events({
  
  'click button#showMore': function(event){
    Session.set("showNum",2 + Session.get("showNum"))
  },
    'click button#showLess': function(event){
    Session.set("showNum",-2 + Session.get("showNum"))
  }
});