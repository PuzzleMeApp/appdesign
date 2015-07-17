Session.set("showNum",5);

Template.puzzle.helpers({
  puzzles: function () {
	  return Puzzles.find({},
                       {limit:Session.get("showNum"),
                        sort:{createdAt:-1}}
                      ).fetch(); // we are finding all of the quotes on the server to show on the client
  },
  showNum: function(){
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

  }

});


Session.set("counter",0);


Template.demoTemp.events(
{
"click button#clicker":
 function(event) {
  var c = Session.get("counter");
  Session.set("counter",c+1);

    } 
  }
)

Template.demoTemp.events(
{
"click button#exit":
function(event) {
  var c = Session.get("counter");
  Session.set("counter",c-1);

  }
}
);


Template.demoTemp.helpers({
  theCount: function(){
    return Session.get("counter");
  }
}) 

/*'click button.clicker': function (event) {
  counter.update(this._id,{$inc:{c: 1}}); 
  },

'click button.exit': function (event) {
  counter.update(this._id,{$inc:{c: -1}}); 
  }, */
