import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ReceiptsComponent extends Component {
  @tracked search = "";

  get filteredDonations() {
    if (this.search === "") {
      return this.args.donations;
    } else {
      return this.args.donations.filter(donation => {
        let localSearch = this.search.toLowerCase();
        return donation.id === localSearch ||
          donation.firstName.toLowerCase().includes(localSearch) ||
          donation.lastName.toLowerCase().includes(localSearch)
      });
    }
  }
}
