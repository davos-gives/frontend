import { helper } from '@ember/component/helper';

export default helper(function formatCurrency([value]/*, hash*/) {
  if (value == null) {
    return "$0.00"
  }
  let dollars = Math.floor(value / 100);
  let cents = value % 100;
  let sign = '$';

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${sign}${dollars}.${cents}`;
});