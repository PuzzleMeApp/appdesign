Profiles = new Meteor.Collection('profiles');

Puzzles = new Mongo.Collection("puzzles");

People = new Mongo.Collection("people");

Feedback = new Mongo.Collection("feedback")

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
	stores: [imageStore]
});