// Subscriptions
Meteor.subscribe("messages");
Meteor.subscribe("allUsernames");
Meteor.subscribe("channels");

Meteor.startup(function() {
    Session.set('channel', 'general');
});
