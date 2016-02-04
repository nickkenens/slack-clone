Template.channel.events({
	'click .channel': function() {
		Session.set('channel', this.name);
	}
})

Template.footer.events({
	'keypress input': function(e) {
		e.stopPropagation();
		var message = e.target.value;
		if (message) {
			//ternary
			var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
			if (charCode == 13) {
				Meteor.call("newMessage", {
					text: message,
					channel: Session.get('channel')
				});
				e.target.value = ""
				return false
			}
		}
	}
});
