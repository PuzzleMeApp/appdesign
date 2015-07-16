Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});
Router.route('/schedule', {name: 'schedule'});
Router.route('/map', {name: 'map'});
Router.route('/people',{name:'people'});
Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profile',{name:'profiles'});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});

Router.route('/myprofile',
	{name:'myprofile',
	template:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:Meteor.userId()})
	}
});