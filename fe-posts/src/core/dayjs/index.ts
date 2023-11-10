import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // import locale
import isLeapYear from 'dayjs/plugin/isLeapYear'; // import plugin
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(isLeapYear); // use plugin
dayjs.extend(weekday);
dayjs.extend(quarterOfYear);

dayjs.locale('en'); // use locale
type DAYJS_TYPE = string | number | dayjs.Dayjs | Date | null | undefined;

export class DateJS {
  static getDate(date?: DAYJS_TYPE, defaultValue: any = dayjs()) {
    if (date) return dayjs(date);

    if (defaultValue) return defaultValue;
  }

  static getMonth(date?: DAYJS_TYPE) {
    return this.getDate(date).month() + 1;
  }
  static getYear(date?: DAYJS_TYPE) {
    return this.getDate(date).year();
  }

  static getDateFromNow(date: string) {
    return dayjs().diff(dayjs(date), 'day');
  }

  static splitDayMonthYear(date: string) {
    const dateSplit = date.split('-');
    return {
      day: dateSplit[2],
      month: dateSplit[1],
      year: dateSplit[0],
    };
  }

  static getFormatDate(
    date?: DAYJS_TYPE,
    format: string = DATE_PICKER_FORMAT,
    defaultValue: any = dayjs().format(format)
  ) {
    if (date) return dayjs(date).format(format);

    if (defaultValue) return defaultValue;
  }

  static getDateFromStartOfYear(date?: DAYJS_TYPE) {
    return dayjs(date).startOf('year');
  }
  static getFormatDateFromStartOfYear(
    date?: DAYJS_TYPE,
    format: string = DATE_PICKER_FORMAT
  ) {
    return dayjs(date).startOf('year').format(format);
  }

  static getDateFromStartOfMonth(date?: DAYJS_TYPE) {
    return dayjs(date).startOf('month');
  }
  static getFormatDateFromStartOfMonth(
    date?: DAYJS_TYPE,
    format: string = DATE_PICKER_FORMAT
  ) {
    return dayjs(date).startOf('month').format(format);
  }
  static isDayJS(date?: any) {
    return dayjs.isDayjs(date);
  }
  static isValid(date?: any) {
    return dayjs(date).isValid();
  }
  static isSame({
    date1,
    date2,
    options,
  }: {
    date1?: any;
    date2?: any;
    options?: dayjs.OpUnitType;
  }) {
    return dayjs(date1).isSame(date2, options);
  }
}

export const dayjsInstance = dayjs;

const dayjsIns = dayjs();
export type DateJSType = typeof dayjsIns;

// FORMATS
// WITH HYPHEN SYMBOLS
export const DATE_PICKER_FORMAT = 'YYYY-MM-DD';
export const MONTH_YEAR_FORMAT = 'MM-YYYY';
export const DATE_STRING_FORMAT = 'MMM DD, YYYY';
