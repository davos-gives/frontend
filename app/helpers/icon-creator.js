import { helper } from '@ember/component/helper';

export default helper(function iconCreator(value/*, hash*/) {
  if (value[0] !== null) {
    let name = value.map((n) => n[0])
    return name;
  } else {
    return "";
  }
});

