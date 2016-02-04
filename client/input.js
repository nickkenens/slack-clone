Meteor.call('newMessage', {text: $('.input-box_text').val()});

Template.channel.events({
	'click .channel': function() {
		Session.set('channel', this.name);
	}
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
