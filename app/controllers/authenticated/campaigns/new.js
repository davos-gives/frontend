import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import LongCampaignValidations from '../../../validations/long-campaign';

export default class CampaignsNewController extends Controller {
  queryParams = ['slug', 'amountEligableForReceipt', 'receiptId'];

  LongCampaignValidations = LongCampaignValidations;

  @tracked slug = null;
  @tracked amountEligableForReceipt = null;
  @tracked receiptId = null;
  @tracked isEditing = true;
  @tracked model;

  @service router;
  @service store;

  @action
  cancel() {
    this.router.transitionTo('campaigns.index');
  }

  @action
  save(campaign) {
    campaign.isActive = true;
    campaign.save().then(() => {
      this.router.transitionTo('campaigns.index');
    })
  }

  @action
  addTrackedParams(_element, [object]) {
    object.set('slug', this.slug)
    object.set('amountEligableForReceipt', this.amountEligableForReceipt);
    object.set('receipt', this.store.findRecord('receipt', this.receiptId));
    return object;
  }

  validate(_element, [object]) {
    console.log('running validation');
    return object.validate();
  }
}