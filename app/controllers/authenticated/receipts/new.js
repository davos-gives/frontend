import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import templateValidations from '../../../validations/template';

export default class ReceiptsNewController extends Controller {
  templateValidations = templateValidations;

  @service session;
  @service currentUser;
  @service router;
  @service notifications;

  @tracked sidebarVisible = false;
  @tracked subMenuOpen = false;

  @action
  toggleMenu() {
    this.subMenuOpen = !this.subMenuOpen;
  }

  @action
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  @action
  invalidateSession() {
    this.session.invalidate();
  }

  @action
  validate(_element, [object]) {
    return object.validate();
  }

  @action
  async save(receipt) {
    let surrounding = receipt.get('stackSurrounding');
    let splitString = surrounding.split("#");
    let prefix = splitString[0] ? splitString[0] : "";
    let suffix = splitString[1] ? splitString[1] : "";

    let startingNumber = receipt.get('stackStartingNumber');

    const savedReceipt = await receipt.save();

    let receiptStack = await this.store.createRecord('receipt-stack',
      {
        prefix: prefix,
        suffix: suffix,
        startingNumber: startingNumber,
        receiptTemplate: savedReceipt
      });

    await receiptStack.save();
    this.notifications.success('Template Successfully Created', {
      autoClear: true,
      clearDuration: 5000
    });



    this.router.transitionTo('authenticated.campaigns');
  }
}