import Model, { attr, belongsTo } from '@ember-data/model';

export default class CampaignModel extends Model {
  @attr name;
  @attr defaultImage;
  @attr description;
  @attr slug;
  @attr receiptId;
  @attr amountEligableForReceipt;
  @attr('boolean') isActive;
  // @belongsTo('receipt') receipt;
}
