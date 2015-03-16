import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.belongsTo("image"),
  description: DS.attr("string")
});
