import {
  validatePresence,
  validateConfirmation,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  fname: [validatePresence(true)],
  lname: [validatePresence(true)],
  email: [
    validatePresence(true),
    validateFormat({ type: 'email' })
  ],
  password: [
    validatePresence(true)
  ],
  passwordConfirmation: [validateConfirmation({ on: 'password' }), validatePresence(true)]
};