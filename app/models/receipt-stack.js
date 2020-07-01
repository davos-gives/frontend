import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReceiptStack extends Model {
  @attr prefix;
  @attr startingNumber;
  @attr currentNumber;
  @attr suffix;

  @belongsTo('receiptTemplate') receiptTemplate;
}
