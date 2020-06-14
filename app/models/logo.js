import Model, { attr } from '@ember-data/model';

export default class LogoModel extends Model {
  @attr url;
  @attr category;
}
