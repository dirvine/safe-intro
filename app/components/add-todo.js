import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  todoItem: validator('presence', true)
});

export default Ember.Component.extend(Validations, {
   todoItem: null,
   actions: {
    submit() {
      const text = this.get('todoItem');
      const email = this.get('email');
      this.get('onAdd')(text, email);
    }
  }

});
