import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(site, transition) {
    this.transitionTo('sites.site.images.index', site.get('images').get('firstObject'));
  }
});
