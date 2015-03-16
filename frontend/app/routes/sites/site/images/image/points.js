import Ember from 'ember';

// DELETE ME!

export default Ember.Route.extend({
  model: function() {
    console.log("from points route");

    this.modelFor("image").get("points");
  }
});
