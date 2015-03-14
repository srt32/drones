import DS from 'ember-data';

export default DS.Model.extend({
  capturedAt: DS.attr('date'),
  url: DS.attr('string'),
  site: DS.belongsTo('site')
});
