import Model, { attr } from '@ember-data/model';
import { memberAction } from 'ember-api-actions';
import DS from 'ember-data';

export default DS.Model.extend({
  receiptNumber: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  amountInCents: attr(),
  insertedAt: attr(),

  downloadReceipt: memberAction({
    path: 'download',
    type: 'get',
    before(attributes) {
      console.log(attributes);
    }
  }),
})
