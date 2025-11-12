'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const splitDate = date.split(fromFormat[3]);
  const objectDate = {};
  const newDate = [];

  for (let i = 0; i < splitDate.length; i++) {
    objectDate[fromFormat[i]] = splitDate[i];
  }

  for (let i = 0; i < splitDate.length; i++) {
    if (toFormat[i] === 'YY' && fromFormat.includes('YYYY')) {
      toFormat[i] = 'YYYY';
      objectDate.YYYY = objectDate.YYYY % 100;
    }

    if (toFormat[i] === 'YYYY' && fromFormat.includes('YY')) {
      if (Number(objectDate.YY) < 30) {
        objectDate.YY = Number(objectDate.YY) + 2000;
      } else {
        objectDate.YY = Number(objectDate.YY) + 1900;
      }
      toFormat[i] = 'YY';
    }
    newDate.push(objectDate[toFormat[i]]);
  }

  return newDate.join(toFormat[3]);
}

module.exports = formatDate;
