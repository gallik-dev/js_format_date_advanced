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
  const modifiedToFormat = [...toFormat];
  const newDate = [];

  for (let i = 0; i < splitDate.length; i++) {
    objectDate[fromFormat[i]] = splitDate[i];
  }

  for (let i = 0; i < splitDate.length; i++) {
    if (modifiedToFormat[i] === 'YY' && fromFormat.includes('YYYY')) {
      modifiedToFormat[i] = 'YYYY';
      objectDate.YYYY = objectDate.YYYY.slice(-2);
    }

    if (modifiedToFormat[i] === 'YYYY' && fromFormat.includes('YY')) {
      if (Number(objectDate.YY) < 30) {
        objectDate.YY = Number(objectDate.YY) + 2000;
      } else {
        objectDate.YY = Number(objectDate.YY) + 1900;
      }
      modifiedToFormat[i] = 'YY';
    }
    newDate.push(objectDate[modifiedToFormat[i]]);
  }

  return newDate.join(modifiedToFormat[3]);
}

module.exports = formatDate;
