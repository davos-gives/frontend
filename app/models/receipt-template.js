import Model, { attr, hasMany } from '@ember-data/model';

export default class ReceiptTemplateModel extends Model {
  @attr name;
  @attr title;
  @attr published;
  @attr logoUrl;
  @attr description;
  @attr signatureUrl;
  @attr signatureFooter;
  @attr dateFormat;
  @attr font;
  @attr primaryColour;
  @attr secondaryColour;
  @attr tertiaryColour;
  @attr quaternaryColour;
  @attr quinaryColour;
  @attr insertedAt;

  @hasMany('campaign') campaigns;
}
