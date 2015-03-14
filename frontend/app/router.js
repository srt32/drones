import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sites', { path: "/" }, function() {
    this.route('site', { path: "sites/:site_id" });
  });
});

export default Router;
