import Model, { attr } from '@ember-data/model';
import { memberAction } from 'ember-api-actions';
import DS from 'ember-data';

export default DS.Model.extend({
  receiptNumber: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  amountEligableForTaxPurposes: attr(),
  insertedAt: attr(),

  downloadReceipt: memberAction({
    path: 'download',
    type: 'get',
    before(attributes) {
      console.log(attributes);
    }
  }),

  resendReceipt: memberAction({
    path: 'resend',
    type: 'get',
    before(attributes) {
      console.log(attributes);
    }
  })
})
