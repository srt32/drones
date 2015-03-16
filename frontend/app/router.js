import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('sites', { path: "/" }, function() {
    this.resource('site', { path: "sites/:site_id" }, function() {
      this.resource('images', function() {
        this.resource('image', { path: "/:image_id" }, function() {
          this.resource('points', function() {});
        });
      });
    });
  });
});

export default Router;
