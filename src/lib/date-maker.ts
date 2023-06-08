/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
import moment from 'moment';

class DateMaker {
  static createDays(): number[] {
    const array = [];
    for (let i = 1; i <= 31; i++) {
      array.push(i);
    }
    return array;
  }

  static createMonths(): string[] {
    return moment.months();
  }

  static createYears(): number[] {
    const array = [];
    const currentYear = moment().year();
    for (let i = 1919; i <= currentYear; i++) {
      array.push(i);
    }
    return array;
  }
}
export default DateMaker;
