import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(site, transition) {
    this.transitionTo('image', site.get('images').get('firstObject'));
  }
});
