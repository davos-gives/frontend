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
    this.router.transitionTo('authenticated.campaigns');
  }

  @action
  save(campaign) {
    campaign.isActive = true;
    campaign.save().then(() => {
      this.router.transitionTo('authenticated.campaigns');
    })
  }

  @action
  async addTrackedParams(_element, [object]) {
    let template = await this.store.findRecord('receipt-template', this.receiptId)
    object.set('slug', this.slug)
    object.set('amountEligableForReceipt', this.amountEligableForReceipt);
    object.set('receiptTemplate', template);
    return object;
  }

  validate(_element, [object]) {
    console.log('running validation');
    return object.validate();
  }
}