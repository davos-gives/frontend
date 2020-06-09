import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias, oneWay } from '@ember/object/computed';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default class ReceiptSignatureViewerComponent extends Component {
  @service store;

  @tracked page = 1;
  @tracked perPage = 10;

  constructor() {
    super(...arguments);
    const signatures = this.store.findAll('signature');
  }

  @pagedArray(
    'signatures', { page: alias('parent.page'), perPage: alias('parent.perPage') }
  ) pagedContent;

  @oneWay('pagedContent.totalPages') totalPages;
}
