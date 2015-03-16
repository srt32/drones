import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(image, transition) {
    this.transitionTo("points.index") //, image.get("points"));
  }
});
