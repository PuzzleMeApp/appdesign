$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});
Template.search.events({
 'click #searchButton': function(event){
 	Session.set("searchData",$("#searchWorking").val()); 
 	Session.set("searchWorking",Puzzles.find({puzzlename:Session.get("searchData")}).fetch());
 	Session.set("searchPeople",People.find({userName:Session.get("searchData")}).fetch());
 	location.reload()
 	}})

