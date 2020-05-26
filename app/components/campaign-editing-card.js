import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CampaignEditingCardComponent extends Component {
  get defaultImage() {
    let imageNumber = Math.floor(Math.random() * Math.floor(3)) + 1;
    return `Active_donation_bg${imageNumber}`
  }
}
