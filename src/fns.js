export default {
  isDate(d) {
    return Object.prototype.toString.call(d) === '[object Date]' && !isNaN(d.valueOf())
  },
  isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
  },
  isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  },
  zeroPad(str, len) {
    len = len || 2;
    let pad = '0';
    str = str + '';
    return str.length >= len
      ? str
      : new Array(len - str.length + 1).join(pad) + str;
  },
  titleCase(str) {
    if (!str) {
      return '';
    }
    return str[0].toUpperCase() + str.substr(1).toLowerCase();
  },
  ordinal(i) {
    let j = i % 10;
    let k = i % 100;
    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
  },
  normalize(str) {
    str = str.toLowerCase();
    str = str.replace(/s$/, '');
    if (str === 'day') {
      return 'date';
    }
    return str;
  },
  getEpoch(tmp) {
    //support epoch
    if (typeof tmp === 'number') {
      return tmp;
    }
    //suport date objects
    if (exports.isDate(tmp)) {
      return tmp.getTime();
    }
    if (tmp.epoch) {
      return tmp.epoch;
   }
    return null;
  }
}
