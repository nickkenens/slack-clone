// Subscriptions
Meteor.subscribe("messages");
Meteor.subscribe("allUsernames");
Meteor.subscribe("channels");

// runs on startup
Meteor.startup(function() {
    Session.set('channel', 'general');
});
