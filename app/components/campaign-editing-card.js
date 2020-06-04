import Component from '@glimmer/component';

export default class CampaignEditingCardComponent extends Component {
  get defaultImage() {
    let imageNumber = Math.floor(Math.random() * Math.floor(3)) + 1;
    return `Active_donation_bg${imageNumber}`
  }
}
