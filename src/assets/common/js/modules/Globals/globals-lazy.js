
export default {
  init() {
    this.setLazy();
  },

  setLazy() {
    Conquer.lazyload = new LazyLoad({
      data_src: 'src',
      class_loading: 'is--loading',
      class_loaded: 'is--loaded',
      class_error: 'has--lazy-error',
      elements_selector: '.js--lazy',
      threshold: 500,
      callback_set(_this) {
        _this.classList.remove('has--lazy');
      },
      callback_load(_this) {
        _this.classList.remove('has--placeloader');
      },
    });
  },
};
