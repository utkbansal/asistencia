if (Meteor.isClient) {
    Template.nav.onRendered(function () {
        this.$(".button-collapse").sideNav();

    });

    Template.modal.onRendered(function () {
        this.$('.modal-trigger').leanModal();
    });

    Template.body.events({
        "click .fixed-action-btn": function (event) {
            event.preventDefault();
            $('#modal1').openModal();
        }

    });

    Template.modal.events({
        "submit .new-subject": function (event) {
            event.preventDefault();
            console.log(event.target.name.value)
        },

        "click .cancel": function (event) {
            event.preventDefault();
            $('#modal1').closeModal();
        }
    })

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
