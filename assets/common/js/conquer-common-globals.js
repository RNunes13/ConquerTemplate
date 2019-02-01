(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _globalsIndex = require('./modules/Globals/globals-index');

var _globalsIndex2 = _interopRequireDefault(_globalsIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  _globalsIndex2.default.init();
};

document.addEventListener('DOMContentLoaded', init);

},{"./modules/Globals/globals-index":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  init: function init() {
    this.fontsLoad();
  },
  fontsLoad: function fontsLoad() {
    var OpenSans400 = new FontFaceObserver('Open Sans', { weight: 400 });
    var OpenSans300 = new FontFaceObserver('Open Sans', { weight: 300 });
    var OpenSans600 = new FontFaceObserver('Open Sans', { weight: 600 });
    var OpenSans700 = new FontFaceObserver('Open Sans', { weight: 700 });

    Promise.all([OpenSans400.load(), OpenSans300.load(), OpenSans600.load(), OpenSans700.load()]);
  }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _globalsSetGlobals = require('./globals-setGlobals');

var _globalsSetGlobals2 = _interopRequireDefault(_globalsSetGlobals);

var _globalsFonts = require('./globals-fonts');

var _globalsFonts2 = _interopRequireDefault(_globalsFonts);

var _globalsLazy = require('./globals-lazy');

var _globalsLazy2 = _interopRequireDefault(_globalsLazy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  init: function init() {
    _globalsSetGlobals2.default.init();
    _globalsFonts2.default.init();
    _globalsLazy2.default.init();
  }
};

},{"./globals-fonts":2,"./globals-lazy":4,"./globals-setGlobals":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  init: function init() {
    this.setLazy();
  },
  setLazy: function setLazy() {
    Conquer.lazyload = new LazyLoad({
      data_src: 'src',
      class_loading: 'is--loading',
      class_loaded: 'is--loaded',
      class_error: 'has--lazy-error',
      elements_selector: '.js--lazy',
      threshold: 500,
      callback_set: function callback_set(_this) {
        _this.classList.remove('has--lazy');
      },
      callback_load: function callback_load(_this) {
        _this.classList.remove('has--placeloader');
      }
    });
  }
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  init: function init() {
    this.setGlobals();
  },
  setGlobals: function setGlobals() {
    window.Conquer = window.Conquer || {};
    Conquer.pathname = window.location.pathname;

    // Cache Elements
    Conquer.html = document.querySelector('html');
    Conquer.body = document.querySelector('body');
    Conquer.header = document.querySelector('.js--header');
    Conquer.navbar = document.querySelector('.js--navbar');
    Conquer.footer = document.querySelector('.js--footer');

    // External Plugins
    Conquer.isMobile = isMobile.any;
  }
};

},{}]},{},[1]);
