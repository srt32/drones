import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var image = this.modelFor("image");
    var points = this.store.find("point", { image_id: image.get("id") });
    // need to append to the image model??

    return points;
  }
});
