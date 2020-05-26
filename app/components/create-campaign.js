import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ShortCampaignValidations from '../validations/short-campaign';
import { sort } from '@ember/object/computed';

export default class CreateCampaignComponent extends Component {
  ShortCampaignValidations = ShortCampaignValidations;

  @service store;
  @service router;

  @tracked isEditing = false;
  @tracked isUpdated = true;

  get activeCampaigns() {
    return this.args.campaigns.filter(campaign => campaign.isActive === true && !campaign.isSaving);
  }

  sortProperties = Object.freeze(['id:desc']);

  @sort('activeCampaigns', 'sortProperties')
  sortedCampaigns;

  validate(_element, [object]) {
    return object.validate();
  }
}
