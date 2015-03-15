import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('site');
  },

  afterModel: function(sites, transition) {
    this.transitionTo('sites.site', sites.get('firstObject'));
  }
});
