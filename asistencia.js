if (Meteor.isClient) {
    Template.nav.onRendered(function () {
        this.$(".button-collapse").sideNav();

    });

    Template.modal.onRendered(function () {
        this.$('.modal-trigger').leanModal();
    })

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
