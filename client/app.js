// define helper for templates
Template.messages.helpers({
	messages: Messages.find({})
})

// respond to event on template
Template.footer.events({


	'keypress input': function(event) {
		// responds to enter keypress (13)
		// Appens html for the time being
		if (event.charCode == 13) {
			event.stopPropagation();
			var message = event.target.value;
			event.target.value ="";
			Messages.insert({text: message});
			return false;
		}
	}
})

// Global helpers to be used within all templates
Template.registerHelper("usernameFromId", function(userId){
	var user = Meteor.users.findOne({_id: userId});
	if (typeof user === undefined) {
		return "Anonymous"
	}
	if (typeof user.services.github !== "undefined") {
		return user.services.github.username;
	}

	return user.username;
});

Template.registerHelper("timestampToTime", function (timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.listings.helpers({
	channels: function() {
		return Channels.find({});
	}
})
