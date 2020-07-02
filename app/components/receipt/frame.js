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
    }, 200);
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
    return this.args.receipt.templateCode || `<!DOCTYPE html>
    <html lang="en" style="--primary: #E5AD23; --secondary: #411E82; --tertiary: #BB8B0E; --quaternary: #FFFFFF; --quinary: #666271; --font: Open Sans">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="http://localhost:4000/css/app.css"/>
        <script>
          window.addEventListener('message', function(event) {
          event.data.forEach(function(element) {
             if(element.key == 'title') {
                document.getElementById('title').innerHTML = element.value
            } else if (element.key == 'primaryColour') {
              var html = document.getElementsByTagName('html')[0];
              html.style.cssText += \`--primary: \${element.value}\`;
            } else if(element.key == 'secondaryColour') {
                var html = document.getElementsByTagName('html')[0];
                html.style.cssText += \`--secondary: \${element.value}\`;
            } else if(element.key == 'tertiaryColour') {
                var html = document.getElementsByTagName('html')[0];
                html.style.cssText += \`--tertiary: \${element.value}\`;
            } else if(element.key == 'quaternaryColour') {
                var html = document.getElementsByTagName('html')[0];
                html.style.cssText += \`--quaternary: \${element.value}\`;
            } else if(element.key == 'quniaryColour') {
                var html = document.getElementsByTagName('html')[0];
                html.style.cssText += \`--quinary: \${element.value}\`;
            } else if(element.key == "description") {
              document.getElementById('description').innerHTML = element.value
            } else if(element.key == "signatureFooter") {
              document.getElementById('signature_footer').innerHTML = element.value
            } else if(element.key == "font") {
              var html = document.getElementsByTagName('html')[0];
              html.style.cssText += \`--font: \${element.value}\`;
            } else if(element.key == "dateFormat") {
              var html = document.getElementsByClassName('date-format');
              if(element.value ==="MM / DD / YY") {
                  html[0].innerHTML = "12 / 30 / 20"
                  html[1].innerHTML = "12 / 30 / 20"
              } else if(element.value === "DD / MM / YY") {
                  html[0].innerHTML = "30 / 12 / 20"
                  html[1].innerHTML = "30 / 12 / 20"
              }  else if(element.value === "DD - MM - YY") {
                  html[0].innerHTML = "30 - 12 - 20"
                  html[1].innerHTML = "30 - 12 - 20"
              } else if(element.value === "MM - DD - YY") {
                  html[0].innerHTML = "12 - 30 - 20"
                  html[1].innerHTML = "12 - 30 - 20"
              } 
            }
          });
        });
        </script>
      </head>
      <body>
        <main role="main" class="">
    <div class="receipts font-family">
      <div class="flex h-56 mx-10 justify-between"> 
        <h1 class="primary-text capitalize font-black text-3xl self-end" id="title">Many thanks :)</h1>
        <img id="logo" src="http://res.cloudinary.com/davos-gives/image/upload/v1593393385/mwwf4wxozcxstpxnrzav.png" class="w-48 mt-4 self-start template_logo"/>
    
      </div>
      <div class="mx-10 mt-8 py-4">
        <div class="texy-gray-700 leading-normal text-sm" id="description"><p>After 18 years in the same location, the Barks & Meows Shelter faced a move. In addition to finding a suitable location that will permit us to continue our work, major renovations and modification may well be required. Your assistance to our organization is greatly appreciated. You are helping our shelter reach our goal; our survival is in your hands.</p></div>
        <img id="signature" id="signature_url" src="http://res.cloudinary.com/davos-gives/image/upload/v1593393887/vv9bkhd0g33iii1m5iqz.png" class="w-32" />
        <p class="texy-gray-700 leading-normal text-sm italic" id="signature_footer">Ian Knauer - CEO, Barks and Meows</p>
      </div>
    
      <aside class="form-header mx-10 mt-10 flex justify-between content-center mb-2">
        <address id="from">
          <div class="text-sm texy-gray-700">
            <p>Official Receipt as below:</p>
          </div>
        </address>
        <div id="powered-by" class="inline-flex text-sm content-center texy-gray-700"><span>Powered by</span> <img class="-mt-2 object-contain w-15" src="http://localhost:4000/images/davos-logo.png" /></div>
      </aside>
      <table class="w-full tertiary-background-color tertiary-border-color px-5 py-5 table-fixed">
        <tbody>
          <tr class="">
            <td class="w-1/4 px-8 pt-8 pb-1"><span class="uppercase font-thin text-xs quaternary-text">Charitable Regis #</span></td>
            <td class="w-1/4 px-4 pt-8 pb-1"><span class="font-bold text-sm quaternary-text">#119219814 RR 0001<span></td>
            <td class="w-1/4 px-4 pt-8 pb-1"><span class="uppercase font-thin text-xs text-white">Name</span></td>
            <td class="w-1/4 px-4 pt-8 pb-1"><span class="font-bold text-sm quaternary-text capitalize">Jane Doe<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Receipt #</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">#100500<span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">Street and Suite</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">123 1001 East street<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Date of issue</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text date-format">14 / 5 / 2020</span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">City, Province</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text capitalize">Vancouver, BC,</span> <span class="font-bold text-sm quaternary-text uppercase">V3H4X9<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Place of Issue</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">Vancouver, BC<span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">Country</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">Canada<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1 pt-6"><span class="uppercase font-thin text-xs quaternary-text">Received on</span></td>
            <td class="w-1/4 px-4 py-1 pt-6"><span class="font-bold text-sm quaternary-text date-format">14 / 5 / 2020<span></td>
            <td class="w-1/4 px-4 py-1 pt-6"><span class="uppercase font-thin text-xs quaternary-text">Amount Received</span></td>
            <td class="w-1/4 px-4 py-1 pt-6"><span class="font-bold text-sm quaternary-text">$100.00<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 py-1"><span class="uppercase font-thin text-xs quaternary-text">Received the Sum of</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">$100.00<span></td>
            <td class="w-1/4 px-4 py-1"><span class="uppercase font-thin text-xs quaternary-text">Value of advantage</span></td>
            <td class="w-1/4 px-4 py-1"><span class="font-bold text-sm quaternary-text">$0.00<span></td>
          </tr>
          <tr class="">
            <td class="w-1/4 px-8 pt-1 pb-8"></td>
            <td class="w-1/4 px-4 py-1 pb-8"></td>
            <td class="w-1/4 px-4 py-1 pb-8"><span class="uppercase font-thin text-xs quaternary-text">Eligible amount of gift for tax purposes</span></td>
            <td class="w-1/4 px-4 py-1 pb-8"><span class="font-bold text-sm quaternary-text">$100.00</span></td>
          </tr>
        </tbody>
      </table>
        <p class="text-xs text-center text-grey-600 mx-16 mt-4">this is an official receipt for income tax purposes. Canada Revenue Agency Canada Revenue Agency www.cra-arc.gc.ca/charitiesandgiving</p>
        <div class="flex flex-col">
        <div class="flex-grow"></div>
        <aside class="footer flex justify-between mx-16 content-center mt-6 text-sm">
          <address id="from">
            <div class="text-grey-700">
              <p>(604) 123 4567<br />ian@barks-meows.org<br />barks-moeows.org</p>
            </div>
          </address>
    
          <img src="http://res.cloudinary.com/davos-gives/image/upload/v1593393385/mwwf4wxozcxstpxnrzav.png" class="h-24 w-auto template_logo"/>
        </aside>
    </div>
        </main>
        <footer>
          <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Cardo" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        </footer>
      </body>
    </html>
    `
  }
}
