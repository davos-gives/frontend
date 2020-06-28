import Model, { attr } from '@ember-data/model';

export default class DonationModel extends Model {
  @attr receiptNumber;
  @attr firstName;
  @attr lastName;
  @attr amountInCents;
  @attr insertedAt;
  @attr url;
}
