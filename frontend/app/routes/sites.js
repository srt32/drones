import Ember from 'ember';

export default Ember.Route.extend({
  // get sites from server
  model: function() {
    return this.store.find('site');
  },

  x_model: function() {
    return [
      { id: 1, name: "site 1", images: [
        { id: 1, captured_at: "1/1/2015", url: "http://foo.com", site_id: 1 },
        { id: 2, captured_at: "2/2/2015", url: "http://bar.com", site_id: 1 }
      ] },
      { id: 2, name: "site 2", images: [] },
      { id: 3, name: "site 3", images: [] },
    ];
  }
});
