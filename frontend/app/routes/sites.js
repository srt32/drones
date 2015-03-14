import Ember from 'ember';

export default Ember.Route.extend({
  // get sites from server
  model: function() {
    return [
      { id: 1, name: "site 1" },
      { id: 2, name: "site 2" },
      { id: 3, name: "site 3" },
    ];
  }
});
