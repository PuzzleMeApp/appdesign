Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});
Router.route('/puzzle',{name:'puzzle'});
Router.route('/submit',{name:'submit'});
Router.route('/', {name: 'welcome'});
Router.route('/people',{name:'people'});
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

Router.route('/myprofile',
	{name:'myprofile',
	template:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:Meteor.userId()})
	}});
Router.route('/puzzledisplay/:_id',
	{name:'puzzledisplay',
	data: function(){ return Puzzles.findOne({_id:this.params._id})}

});