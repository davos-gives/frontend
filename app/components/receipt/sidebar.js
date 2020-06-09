import Component from '@glimmer/component';
import { action } from '@ember/object';
import { exec, init } from 'pell'

export default class ReceiptSidebarComponent extends Component {
  dateFormats = ["MM / DD / YY", "MM - DD - YY", "DD / MM / YY", "DD - MM - YY"];

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
        },
        {
          name: 'Link',
          icon: '<div class="link"></div>',
          title: 'Link',
          result: () => exec('createLink')
        },
      ]
    })
  }


}
