import {
  validatePresence,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  fname: [validatePresence(true)],
  lname: [validatePresence(true)],
  email: [
    validatePresence(true),
    validateFormat({ type: 'email' })
  ]
};