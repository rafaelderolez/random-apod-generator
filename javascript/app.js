/*global $, Backbone */

var App = {

    Collections: {},
    Models: {},
    Views: {},

    init: function() {
        var _this = this;

        this.router = new App.Router();
        this.currentView;

        this.router.on('route:home', function() {
            if (!_this.home) {
                _this.home = new App.Views.Home();
                _this.currentView = _this.home;
                _this.currentView.render();
            }
        });

        Backbone.history.start();
    },

};

$().ready(function() {
    App.init();
});
