import {
  validatePresence,
  validateNumber
} from 'ember-changeset-validations/validators';

export default {
  description: [validatePresence(true)],
  name: [validatePresence(true)]
};