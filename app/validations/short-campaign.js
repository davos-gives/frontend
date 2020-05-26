import {
  validatePresence,
  validateNumber
} from 'ember-changeset-validations/validators';

export default {
  slug: [
    validatePresence(true),
  ],
  amountEligableForReceipt: [
    validatePresence(true),
    validateNumber({ lt: 101 })
  ]
};