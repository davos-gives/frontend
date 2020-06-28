import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormInputComponent extends Component {
  @tracked focused = false;

  @action
  startPlaces(element) {

    const addressComponents = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };

    let address1 = "";
    let city = "";
    let province = "";
    let country = "";
    let postalCode = "";

    const autoComplete = new google.maps.places.Autocomplete(element);

    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();

      for (var i = 0; i < place.address_components.length; i++) {
        let addressType = place.address_components[i].types[0]
        if (addressComponents[addressType]) {
          let val = place.address_components[i][addressComponents[addressType]]
          switch (addressType) {
            case "street_number":
              address1 += `${val}`;
              break;
            case "route":
              address1 += ` ${val}`;
              break;
            case "locality":
              city += `${val}`;
              break;
            case "administrative_area_level_1":
              province += `${val}`;
              break;
            case "country":
              country += `${val}`;
              break;
            case "postal_code":
              postalCode += `${val}`;
              break;
          }
        }
      }

      this.args.changeset.set('address1', address1);
      this.args.changeset.set('city', city);
      this.args.changeset.set('province', province);
      this.args.changeset.set('country', country);
      this.args.changeset.set('postalCode', postalCode);
    })
  }

  @action
  addFocus() {
    this.focused = true;
  }

  @action
  removeFocus() {
    if (!this.args.value || this.args.value === "") {
      this.focused = false;
    }
  }
}
