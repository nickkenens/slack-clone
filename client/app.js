// Subscriptions
Meteor.subscribe("messages");
Meteor.subscribe("allUsernames");



Template.messages.helpers({
	messages: Messages.find({})
})

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

Template.registerHelper("usernameFromId", function(userId){
	var user = Meteor.user.findOne({_id: userId});
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
