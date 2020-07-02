import {
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  name: [validatePresence(true)],
  title: [validatePresence(true)],
  logoUrl: [validatePresence(true)],
  description: [validatePresence(true)],
  signatureUrl: [validatePresence(true)],
  signatureFooter: [validatePresence(true)],
  dateFormat: [validatePresence(true)],
  font: [validatePresence(true)],
  primaryColour: [validatePresence(true)],
  secondaryColour: [validatePresence(true)],
  tertiaryColour: [validatePresence(true)],
  quaternaryColour: [validatePresence(true)],
  quinaryColour: [validatePresence(true)],
};