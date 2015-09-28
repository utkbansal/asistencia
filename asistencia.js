if (Meteor.isClient) {
    Template.nav.onRendered(function () {
        this.$(".button-collapse").sideNav();

    });

    Template.modal.onRendered(function () {
        this.$('.modal-trigger').leanModal();
    });

    Template.body.events({
        "click .fixed-action-btn": function (event) {
            console.log('here');
            event.preventDefault();
            $('#modal1').openModal();
        }
    })

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
