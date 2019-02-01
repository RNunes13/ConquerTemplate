(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _generalIndex = require('./pages/General/general-index');

var _generalIndex2 = _interopRequireDefault(_generalIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', _generalIndex2.default.init);

},{"./pages/General/general-index":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headerMethods = require('./header/header-methods');

var _headerMethods2 = _interopRequireDefault(_headerMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  init: function init() {
    _headerMethods2.default.init();
  }
};

},{"./header/header-methods":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  header: {
    self: document.querySelector('.js--header'),
    menu: document.querySelector('.js--menu'),
    navbar: document.querySelector('.js--navbar'),
    items: document.querySelector('.js--items'),
    item: document.querySelectorAll('.js--item'),
    link: document.querySelectorAll('.js--link')
  }
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cacheSelectors = require('./__cache-selectors');

var _cacheSelectors2 = _interopRequireDefault(_cacheSelectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var El = _cacheSelectors2.default.header;

exports.default = {
  init: function init() {
    this.alterBackgroundColor();
    this.setLinkActive();
    this.setScrollAction();
    this.onClickMenuButton();
  },
  alterBackgroundColor: function alterBackgroundColor() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight * 0.3) El.self.classList.remove('transparent');else El.self.classList.add('transparent');
  },
  setLinkActive: function setLinkActive() {
    //
  },
  setScrollAction: function setScrollAction() {
    var _this = this;

    window.addEventListener('scroll', function () {
      _this.alterBackgroundColor();
      _this.setLinkActive();
    });
  },
  onClickMenuButton: function onClickMenuButton() {
    El.menu.addEventListener('click', function () {
      var navbarHeight = El.navbar.clientHeight;
      var windowHeight = window.innerHeight;

      if (!El.navbar.classList.contains('is--active') && navbarHeight >= windowHeight) {
        El.navbar.classList.add('has--scroll');
      } else {
        El.navbar.classList.remove('has--scroll');
      }

      El.navbar.classList.toggle('is--active');
    });
  }
};

},{"./__cache-selectors":3}]},{},[1]);
