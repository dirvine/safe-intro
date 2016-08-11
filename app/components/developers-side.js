import Ember from 'ember';
var DevPage = Ember.Object.extend({
  page: null
});
var devPage = DevPage.create({ page: null });

export default Ember.Component.extend({
    actions: {
      submit() {
        DevPage.set({ page : this.get('value') });
    }
    },
 
});
