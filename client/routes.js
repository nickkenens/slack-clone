
// configures main app layout
// Has the {{>yield}} keyword in it
// This is where our app gets rendered
Router.configure({
	layoutTemplate: 'app'
});

// Dynamic route
// renders messages according to channel
Router.route('/:channel', function() {
	Session.set('channel', this.params.channel)
	this.render('messages');
});

Router.route('/', function() {
	this.redirect('/general');
})
