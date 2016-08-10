import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { text: "Create Ember app", email: "dave@dave.com" },
      { text: "Create another Ember app", email: "dave@dave.com" }
    ];
  }
});
