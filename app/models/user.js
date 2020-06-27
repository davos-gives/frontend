import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr fname;
  @attr lname;
  @attr email;
  @belongsTo('organization') organization;
}
