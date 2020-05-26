import Model, { attr } from '@ember-data/model';

export default class OrganizationModel extends Model {
  @attr name;
  @attr address1;
  @attr address2;
  @attr city;
  @attr province;
  @attr country;
  @attr postalCode;
  @attr charitableNumber;
  @attr nationId;
  @attr category;
}
