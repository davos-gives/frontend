import Model, { attr, hasMany } from '@ember-data/model';

export default class ReceiptModel extends Model {
  @attr name;
  @attr description;
  @hasMany('campaign') campaign;
}