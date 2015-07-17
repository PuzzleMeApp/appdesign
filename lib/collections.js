Profiles = new Meteor.Collection('profiles');

Puzzles = new Mongo.Collection("puzzles");

var imageStore = new
FS.Store.GridFS("images");

Images = new
FS.Collection("images", {
	stores: [imageStore]
});