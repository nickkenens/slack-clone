Meteor.methods({
	newMessage: function(message) {

		Messages.insert({text: message.text, channel: message.channel, timestamp: Date.now(), user: Meteor.userId()});
	}
})
