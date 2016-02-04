// add helpers to messages templates
Template.messages.helpers({
  messages: Messages.find({})
});

// set ui config to USERNAME & EMAIL
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

// register global helper that will display currentChannel on all templates
Template.registerHelper('currentChannel', function () {
	return Session.get('channel');
});

// register global helper (same as pipes in angular2)
Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.registerHelper("usernameFromId", function (userId) {
	var user = Meteor.users.findOne({_id: userId});
	if (typeof user === "undefined") {
		return "Anonymous";
	}
	if (typeof user.services.github !== "undefined") {
		return user.services.github.username;
	}
	return user.username;
});

Template.listings.helpers({
	channels: function () {
		return Channels.find();
	}
});

Template.listings.helpers({
	active: function() {
		if (Session.get('channel') === this.name) {
			return 'active';
		} else {
			return '';
		}
	}
})
