import Ember from 'ember';

export default Ember.Route.extend({
  // get sites from server
  model: function() {
    return this.store.find('site');
  },

  x_model: function() {
    return [
      { id: 1, name: "site 1", images: [
        { id: 1, date: "1/1/2015", url: "http://foo.com" },
        { id: 2, date: "2/2/2015", url: "http://bar.com" }
      ] },
      { id: 2, name: "site 2", images: [] },
      { id: 3, name: "site 3", images: [] },
    ];
  }
});
