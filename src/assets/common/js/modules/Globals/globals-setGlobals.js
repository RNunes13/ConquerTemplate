
export default {
  init() {
    this.setGlobals();
  },

  setGlobals() {
    window.Conquer = window.Conquer || {};
    Conquer.pathname = window.location.pathname;

    // Cache Elements
    Conquer.html = document.querySelector('html');
    Conquer.body = document.querySelector('body');
    Conquer.header = document.querySelector('.js--header');
    Conquer.navbar = document.querySelector('.js--navbar');
    Conquer.footer = document.querySelector('.js--footer');

    // External Plugins
    Conquer.isMobile = isMobile.any
  },
};
