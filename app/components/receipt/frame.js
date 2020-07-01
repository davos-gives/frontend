import Component from '@glimmer/component';
import { DateTime } from 'luxon';
import { action } from '@ember/object';

export default class ReceiptFrameComponent extends Component {

  @action
  loadChanges() {
    setTimeout(() => {
      var iframe = document.getElementById('my-iframe');
      iframe.contentWindow.postMessage(this.args.receipt.changes, '*');
      this.loadChanges();
    }, 500);
  }

  get title() {
    return this.args.receipt.title || 'Help us find a new home';
  }

  get description() {
    return this.args.receipt.description || 'After 18 years in the same location, the Barks & Meows Shelter faced a move. In addition to finding a suitable location that will permit us to continue our work, major renovations and modification may well be required. Your assistance to our organization is greatly appreciated. You are helping our shelter reach our goal; our survival is in your hands.';
  }

  get signatureFooter() {
    return this.args.receipt.signatureFooter || 'Jane Smith, CEO, Barks & Meows Shelter';
  }

  get signatureImage() {
    return this.args.receipt.signatureUrl || 'http://res.cloudinary.com/davos-gives/image/upload/v1593393887/vv9bkhd0g33iii1m5iqz.png';
  }

  get logoImage() {
    return this.args.receipt.logoUrl || 'https://res.cloudinary.com/davos-gives/image/upload/v1592165096/barks.png';
  }

  get issuedFormat() {
    let { stackStartingNumber, stackSurrounding } = this.args.receipt;

    if (!stackStartingNumber && !stackSurrounding) {
      return "100524"
    }

    let splitString = stackSurrounding ? stackSurrounding.split("#") : "";
    return `${splitString[0] ? splitString[0] : ""}${stackStartingNumber ? stackStartingNumber : ""}${splitString[1] ? splitString[1] : ""}`;
  }

  get formattedDate() {
    let selectedFormat = this.args.receipt.dateFormat;
    switch (selectedFormat) {
      case "MM - DD - YY":
        return DateTime.local().toFormat("LL' - ' dd ' - ' yy");
      case "MM / DD / YY":
        return DateTime.local().toFormat("LL' / ' dd ' / ' yy");
      case "DD - MM - YY":
        return DateTime.local().toFormat("dd' - ' LL ' - ' yy");
      case "DD / MM / YY":
        return DateTime.local().toFormat("dd' / ' LL ' / ' yy");
      default:
        return DateTime.local().toFormat("LL' - ' dd ' - ' yy");
    }
  }

  get font() {
    return this.args.receipt.font || 'Open Sans';
  }

  get primaryColour() {
    return this.args.receipt.primaryColour || "#E5AD23";
  }

  get secondaryColour() {
    return this.args.receipt.secondaryColour || "#411E82;";
  }

  get tertiaryColour() {
    return this.args.receipt.tertiaryColour || "#BB8B0E";
  }

  get quaternaryColour() {
    return this.args.receipt.quaternaryColour || "#FFFFFF";
  }

  get quniaryColour() {
    return this.args.receipt.quniaryColour || "#666271";
  }

  get frameSource() {
    return this.args.receipt.templateCode;
  }
}
