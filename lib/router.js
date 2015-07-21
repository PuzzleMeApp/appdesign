Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});
Router.route('/about',{name:'about'});
Router.route('/boo', {name:'boo'});

Router.route('/yay', {name:'yay'});


Router.route('/notUser', {name:'notUser'});

Router.route('/', {name:'homepage'});

Router.route('/searched',{name:'searched'});


Router.route('/puzzle',{name:'puzzle'});
Router.route('/submit',{name:'submit'});
Router.route('/welcome', {name: 'welcome'});
Router.route('/people',{name:'people'});

Router.route('/feedback',{name:'feedback'});

Router.route("feedbackresponse");
Router.route("feedbacklist");

Router.route('/profile',{name:'profile'});

Router.route('/profile/:_id',
	


	{name:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profiless',{name:'profiless'});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
Router.route('/URLPhotopull',{name:'URLPhotopull'});
Router.route('/myprofile',
	{name:'myprofile',
	template:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:Meteor.userId()})
	}});
Router.route('/puzzledisplay/:_id',
	{name:'puzzledisplay',
	data: function(){ 
		return Puzzles.findOne({_id:this.params._id})}

});


