import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { id: 1, description: "fooooobar point", image_id: 19 }
    ]
  },

  _model: function() {
    var image = this.modelFor("image");

    return image.get("points");
  }
});
