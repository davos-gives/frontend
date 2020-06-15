import Component from '@glimmer/component';
import { action } from '@ember/object';
import { exec, init } from 'pell';
import { tracked } from '@glimmer/tracking';

export default class ReceiptSidebarComponent extends Component {
  dateFormats = ["MM / DD / YY", "MM - DD - YY", "DD / MM / YY", "DD - MM - YY"];
  fonts = ["Arvo", "Cardo", "Lato", "Lora", "Montserrat", "Oswald", "Open Sans", "PT Serif", "Raleway", "Roboto"];

  @tracked colourSet = "Golden";
  @tracked isContent = false;
  @tracked lightMode = false;

  @action
  toggleSidebar() {
    this.isContent = !this.isContent;
  }

  @action
  updateManualColour() {
    console.log("updating colour from the manual picker");
  }

  updateBody(html) {
    this.args.template.set('description', html);
  }

  @action
  toggleSignature(url) {
    this.args.template.set('signatureUrl', url);
  }

  @action
  toggleLogo(url) {
    this.args.template.set('logoUrl', url);
  }

  get letterInProcess() {
    return (
      (!this.args.template.title || this.args.template.title.length === 0) ||
      (!this.args.template.description || this.args.template.description.length === 0) ||
      (!this.args.template.signatureFooter || this.args.template.signatureFooter.length === 0)
    )
  }

  get signatureInProcess() {
    return (!this.args.template.signatureUrl || this.args.template.signatureUrl.length === 0)
  }

  get receiptInProcess() {
    return (
      (!this.args.template.name || this.args.template.name.length === 0) ||
      (!this.args.template.stackStartingNumber || this.args.template.stackStartingNumber.length === 0) ||
      (!this.args.template.dateFormat || this.args.template.dateFormat === 0)
    )
  }

  get logoInProcess() {
    return (!this.args.template.logoUrl || this.args.template.logoUrl.length === 0)
  }

  get templateInProcess() {
    return (!this.args.template.template)
  }

  get issuedFormat() {
    let { stackStartingNumber, stackSurrounding } = this.args.template;

    let splitString = stackSurrounding ? stackSurrounding.split("#") : "";
    return `${splitString[0] ? splitString[0] : ""}${stackStartingNumber ? stackStartingNumber : ""}${splitString[1] ? splitString[1] : ""}`;
  }

  @action
  initPell() {
    init({
      element: document.getElementById('description'),
      onChange: html => {
        this.updateBody(html);
      },
      defaultParagraphSeparator: 'p',
      styleWithCSS: true,
      actions: [
        {
          name: 'bold',
          icon: '<div class="bold"></div>',
          title: 'Bold',
          result: () => exec('bold')
        },
        {
          name: 'italic',
          icon: '<div class="italic"></div>',
          title: 'Italics',
          result: () => exec('italic')
        },
        {
          name: 'underline',
          icon: '<div class="underline"></div>',
          title: 'underline',
          result: () => exec('underline')
        },
        {
          name: 'justifyRight',
          icon: '<div class="justify-right"></div>',
          title: 'Justify Right',
          result: () => exec('justifyRight')
        },
        {
          name: 'justifyLeft',
          icon: '<div class="justify-left"></div>',
          title: 'Justify Left',
          result: () => exec('justifyLeft')
        },
        {
          name: 'justifyCenter',
          icon: '<div class="justify-center"></div>',
          title: 'Justify Center',
          result: () => exec('justifyCenter')
        },
        {
          name: 'justifyFull',
          icon: '<div class="justify-full"></div>',
          title: 'Justify Full',
          result: () => exec('justifyFull')
        }
      ]
    })
  }

  @action
  toggleLightMode() {
    this.lightMode = !this.lightMode;
    this.loadColourSet(this.colourSet);
  }

  @action
  loadColourSet(colour) {
    this.colourSet = colour;
    if (this.lightMode) {
      switch (colour) {
        case "Golden":
          this.args.template.set('primaryColour', "#E5AD23");
          this.args.template.set('secondaryColour', "#411E82");
          this.args.template.set('tertiaryColour', "#f6f4f1");
          this.args.template.set('quaternaryColour', "#666271");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Ultra Violet":
          this.args.template.set('primaryColour', "#502BA3");
          this.args.template.set('secondaryColour', "#3BB7B3");
          this.args.template.set('tertiaryColour', "#F6F6F6");
          this.args.template.set('quaternaryColour', "#666271");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Red":
          this.args.template.set('primaryColour', "#BE1E2D");
          this.args.template.set('secondaryColour', "#B2A37E");
          this.args.template.set('tertiaryColour', "#F6F6F6");
          this.args.template.set('quaternaryColour', "#666271");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Forest":
          this.args.template.set('primaryColour', "#7F682E");
          this.args.template.set('secondaryColour', "#509C1F");
          this.args.template.set('tertiaryColour', "#F2F4F0");
          this.args.template.set('quaternaryColour', "#666271");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Tangerine":
          this.args.template.set('primaryColour', "#E9995A");
          this.args.template.set('secondaryColour', "#411E82");
          this.args.template.set('tertiaryColour', "#F6F4F1");
          this.args.template.set('quaternaryColour', "#666271");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Navy Blue":
          this.args.template.set('primaryColour', "#004A80");
          this.args.template.set('secondaryColour', "#DFA004");
          this.args.template.set('tertiaryColour', "#EFF4F6");
          this.args.template.set('quaternaryColour', "#666271");
          this.args.template.set('quinaryColour', "#666271");
          break;
      }
    } else {
      switch (colour) {
        case "Golden":
          this.args.template.set('primaryColour', "#E5AD23");
          this.args.template.set('secondaryColour', "#411E82");
          this.args.template.set('tertiaryColour', "#BB8B0E");
          this.args.template.set('quaternaryColour', "#FFFFFF");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Ultra Violet":
          this.args.template.set('primaryColour', "#502BA3");
          this.args.template.set('secondaryColour', "#3BB7B3");
          this.args.template.set('tertiaryColour', "#411E82");
          this.args.template.set('quaternaryColour', "#FFFFFF");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Red":
          this.args.template.set('primaryColour', "#BE1E2D");
          this.args.template.set('secondaryColour', "#B2A37E");
          this.args.template.set('tertiaryColour', "#93111E");
          this.args.template.set('quaternaryColour', "#FFFFFF");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Forest":
          this.args.template.set('primaryColour', "#7F682E");
          this.args.template.set('secondaryColour', "#509C1F");
          this.args.template.set('tertiaryColour', "#455C36");
          this.args.template.set('quaternaryColour', "#FFFFFF");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Tangerine":
          this.args.template.set('primaryColour', "#E9995A");
          this.args.template.set('secondaryColour', "#411E82");
          this.args.template.set('tertiaryColour', "#DD8A36");
          this.args.template.set('quaternaryColour', "#FFFFFF");
          this.args.template.set('quinaryColour', "#666271");
          break;
        case "Navy Blue":
          this.args.template.set('primaryColour', "#004A80");
          this.args.template.set('secondaryColour', "#DFA004");
          this.args.template.set('tertiaryColour', "#056DA5");
          this.args.template.set('quaternaryColour', "#FFFFFF");
          this.args.template.set('quinaryColour', "#666271");
          break;
      }
    }
  }
}
