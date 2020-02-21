import Modifier from 'ember-modifier';
import { action } from '@ember/object';

const { random, round } = Math;
const DEFAULT_DELAY = 1000;

export default class FocusHighlightModifier extends Modifier {
  setIntervalId = null;

  get delay() {
    return this.args.named.delay || DEFAULT_DELAY;
  }

  @action moveElement() {
    let top = round(random() * 500);
    let left = round(random() * 500);
    // this.element.style.transform = `translate(${left}px, ${top}px)`
  }

  didReceiveArguments() {
    if (this.setIntervalId !== null) {
      clearInterval(this.setIntervalId);
    }

    this.setIntervalId = setInterval(this.moveElement, this.delay);
  }

  willRemove() {
    clearInterval(this.setIntervalId);
    this.setIntervalId = null;
  }
}
