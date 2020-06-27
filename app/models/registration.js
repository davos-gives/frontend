import Model, { attr } from '@ember-data/model';

export default class RegistrationModel extends Model {
  @attr fname;
  @attr lname;
  @attr email;
  @attr password;
  @attr passwordConfirmation;
}
