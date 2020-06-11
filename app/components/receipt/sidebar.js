import Component from '@glimmer/component';
import { action } from '@ember/object';
import { exec, init } from 'pell';
import { tracked } from '@glimmer/tracking';

export default class ReceiptSidebarComponent extends Component {
  dateFormats = ["MM / DD / YY", "MM - DD - YY", "DD / MM / YY", "DD - MM - YY"];
  fonts = ["Arvo", "Cardo", "Lato", "Lora", "Montserrat", "Oswald", "Open Sans", "PT Serif", "Raleway", "Roboto"];

  @tracked isContent = false;

  @action
  toggleSidebar() {
    this.isContent = !this.isContent;
  }

  @action
  updateManualColour() {
    console.log("updating colour from the manual picker");
  }

  @action
  initPell() {
    init({
      element: document.getElementById('description'),
      onChange: html => {
        console.log(html); // need to set this output to the actual description field.
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


}
