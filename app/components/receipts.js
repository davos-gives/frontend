import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ReceiptsComponent extends Component {
  @service notifications;

  @tracked search = "";

  get filteredDonations() {
    if (this.search === "") {
      return this.args.donations;
    } else {
      return this.args.donations.filter(donation => {
        let localSearch = this.search.toLowerCase();
        return donation.firstName.toLowerCase().includes(localSearch) ||
          donation.lastName.toLowerCase().includes(localSearch) ||
          donation.receiptNumber.toLowerCase().includes(localSearch)
      });
    }
  }

  downloadReceipt(receipt) {
    receipt.downloadReceipt().then(response => {
      const linkSource = `data:application/pdf;base64,${encodeURI(response.data.attributes["receipt-binary"])}`
      const downloadLink = document.createElement("a");
      const fileName = "receipt.pdf";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    })
  }

  @action
  resendReceipt(receipt) {
    receipt.resendReceipt().then(response => {
      this.notifications.success(`Receipt ${receipt.receiptNumber} sent.`, {
        autoClear: true,
        clearDuration: 5000
      });
    })
  }
}
