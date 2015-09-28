if (Meteor.isClient) {
        Template.nav.onRendered(function () {
        this.$(".button-collapse").sideNav();
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
