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
