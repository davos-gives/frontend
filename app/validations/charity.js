import {
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  name: [validatePresence(true)],
  address: [validatePresence(true)],
  charitableNumber: [validatePresence(true)],
  nationId: [validatePresence(true)],
  category: [validatePresence(true)]
};