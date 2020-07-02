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
}
