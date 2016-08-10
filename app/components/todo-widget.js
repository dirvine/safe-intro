import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addTodo(text, email) {
      this.get('todos').pushObject({ text: text, email: email });
    }
  }

});
