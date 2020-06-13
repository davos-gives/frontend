import Component from '@glimmer/component';
import { DateTime } from 'luxon';

export default class ReceiptFrameComponent extends Component {
  get title() {
    return this.args.receipt.title || 'Help us find a new home';
  }

  get description() {
    return this.args.receipt.description || 'After 18 years in the same location, the Barks & Moews Shelter faced a move. In addition to finding a suitable location that will permit us to continue our work, major renovations and modification may well be required. Your assistance to our organization is greatly appreciated. You are helping our shelter reach our goal; our survival is in your hands.';
  }

  get signatureFooter() {
    return this.args.receipt.signatureFooter || 'Jane Smith, CEO, Barks & Meows Shelter';
  }

  get signatureImage() {
    return this.args.receipt.signatureUrl || 'https://res.cloudinary.com/davos-gives/image/upload/v1591932357/jes4pc0pjqcw8aerdabl.png';
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

  get frameSource() {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="http://localhost:4000/css/app.css"/>
        <style>
          
        </style>
      </head>
      <body>
        <main role="main" class="">
    <div class="receipts">
      <div class="flex h-56 mx-10 justify-between"> 
        <h1 class="primary-text capitalize font-black text-3xl self-end" id="title">${this.title}</h1>
        <img id="logo" src="http://localhost:4000/images/barks.png" class="w-48 mt-4 self-start"/>
    
      </div>
      <div class="mx-10 mt-8 py-4">
        <p class="texy-gray-700 leading-normal text-sm" id="description">${this.description}</p>
        <img id="signature" src="${this.signatureImage}" class="w-32" />
        <p class="texy-gray-700 leading-normal text-sm italic" id="signature footer">${this.signatureFooter}</p>
      </div>
    
    
      <aside class="form-header mx-10 mt-10 flex justify-between content-center mb-2">
        <address id="from">
          <div class="text-sm texy-gray-700">
            <p>Official Receipt as below:</p>
          </div>
        </address>
        <div id="powered-by" class="inline-flex text-sm content-center texy-gray-700"><span>Powered by</span> <img class="-mt-1 object-contain w-12" src="http://localhost:4000/images/davos-logo.png" /></div>
      </aside>
      <table class="w-full tertiary-background-color tertiary-border-color px-5 py-5 table-fixed">
        <tbody>
          <tr class="">
            <td class="w-1/4 px-8 pt-8 pb-1"><span class="uppercase font-thin text-xs quaternary-text">Charitable Regis #</span></td>
            <td class="w-1/4 px-4 pt-8 pb-1"><span class="font-bold text-sm quaternary-text">#119219814 RR 0001<span></td>
            <td class="w-1/4 px-4 pt-8 pb-1"><span class="uppercase font-thin text-xs text-white">Name</span></td>
            <td class="w-1/4 px-4 pt-8 pb-1"><span class="font-bold text-sm quaternary-text capitalize">ian knauer<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Receipt #</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">${this.issuedFormat}<span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">Street and Suite</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">305 1823 E Georgia St<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Date of issue</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">${this.formattedDate}</span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">City, Province</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text capitalize">Vancouver, BC, V5L 2B5<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Place of Issue</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">Vancouver, Canada<span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">Country</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">Canada<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1 pt-6"><span class="uppercase font-thin text-xs quaternary-text">Received on</span></td>
            <td class="w-1/4 px-4 py-1 pt-6"><span class="font-bold text-sm quaternary-text">${this.formattedDate}<span></td>
            <td class="w-1/4 px-4 py-1 pt-6"><span class="uppercase font-thin text-xs quaternary-text">Amount Received</span></td>
            <td class="w-1/4 px-4 py-1 pt-6"><span class="font-bold text-sm quaternary-text">$15.00<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Received the Sum of</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">$15.00<span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">Value of advantage</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">$0.00<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 pt-1 pb-8"></td>
            <td class="w-1/4 px-4 py-1 pb-8"></td>
            <td class="w-1/4 px-4 py-1 pb-8"><span class="uppercase font-thin text-xs quaternary-text">Eligible amount of gift for tax purposes</span></td>
            <td class="w-1/4 px-4 py-1 pb-8"><span class="font-bold text-sm quaternary-text">$15.00</span></td>
          </tr>
        </tbody>
      </table>
        <p class="text-xs text-center text-grey-600 mx-16 mt-4">this is an official receipt for income tax purposes. Canada Revenue Agency Canada Revenue Agency www.cra-arc.gc.ca/charitiesandgiving</p>
        <div>
        <aside class="footer flex justify-between mx-16 content-center mt-6 text-sm">
          <address id="from">
            <div class="text-grey-700">
              <p>(604) 123 4567<br />ian@barks-meows.org<br />barks-moeows.org</p>
            </div>
          </address>
    
          <img id="logo2" src="http://localhost:4000/images/barks.png" class="h-24 w-auto"/>
        </aside>
    </div>
        </main>
      </body>
    </html>
    
    `
  }


}
