import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('todos');
  this.route('what');
  this.route('why');
  this.route('where');
  this.route('when');
  this.route('who');

  this.route('developers');
  this.route('partners');
  this.route('users');
});

export default Router;
