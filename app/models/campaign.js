import Model, { attr } from '@ember-data/model';

export default class OrganizationModel extends Model {
  @attr name;
  @attr defaultImage;
}
