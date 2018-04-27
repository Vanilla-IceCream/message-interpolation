(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.LIB_NAME = factory());
}(this, (function () { 'use strict';

  var index = (function () {
    var LIB_NAME = 'LIB_NAME';
    return LIB_NAME;
  });

  return index;

})));
