import {
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  name: [validatePresence(true)],
  address1: [validatePresence(true)],
  city: [validatePresence(true)],
  province: [validatePresence(true)],
  country: [validatePresence(true)],
  postalCode: [validatePresence(true)],
  charitableNumber: [validatePresence(true)],
  nationbuilderId: [validatePresence(true)],
};