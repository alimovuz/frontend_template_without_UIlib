/**
 * Universal date formatter
 * @param {Date|string|number} input  — Date object, ISO string, timestamp, yoki boshqa format
 * @param {string} format             — Masalan: 'DD.MM.YYYY', 'YYYY-MM-DD', 'DD/MM/YYYY HH:mm'
 * @returns {string}
 */

const formatDate = (input: Date | string | number, format = 'DD.MM.YYYY'): string => {
  if (!input) return '';

  let date: Date;

  if (input instanceof Date) {
    date = input;
  } else if (typeof input === 'number') {
    date = new Date(input > 1e10 ? input : input * 1000);
  } else if (typeof input === 'string') {
    const dotFormat = input.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    const slashFormat = input.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

    if (dotFormat) {
      date = new Date(`${dotFormat[3]}-${dotFormat[2].padStart(2, '0')}-${dotFormat[1].padStart(2, '0')}`);
    } else if (slashFormat) {
      date = new Date(`${slashFormat[3]}-${slashFormat[2].padStart(2, '0')}-${slashFormat[1].padStart(2, '0')}`);
    } else {
      date = new Date(input);
    }
  } else {
    return '';
  }

  if (isNaN(date.getTime())) {
    console.warn(`formatDate: yaroqsiz sana — "${input}"`);
    return '';
  }

  const pad = (n: number) => String(n).padStart(2, '0');

  const tokens = {
    YYYY: date.getFullYear(),
    YY:   String(date.getFullYear()).slice(-2),
    MM:   pad(date.getMonth() + 1),
    M:    date.getMonth() + 1,
    DD:   pad(date.getDate()),
    D:    date.getDate(),
    HH:   pad(date.getHours()),
    H:    date.getHours(),
    mm:   pad(date.getMinutes()),
    m:    date.getMinutes(),
    ss:   pad(date.getSeconds()),
    s:    date.getSeconds(),
  };

  type DateToken = keyof typeof tokens;

  return format.replace(/YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s/g, (token) =>
    String(tokens[token as DateToken])
  );
};

export default formatDate