
export default {
  init() {
    this.fontsLoad();
  },

  fontsLoad() {
    const OpenSans400 = new FontFaceObserver('Open Sans', {weight: 400});
    const OpenSans300 = new FontFaceObserver('Open Sans', {weight: 300});
    const OpenSans600 = new FontFaceObserver('Open Sans', {weight: 600});
    const OpenSans700 = new FontFaceObserver('Open Sans', {weight: 700});

    Promise.all([
      OpenSans400.load(),
      OpenSans300.load(),
      OpenSans600.load(),
      OpenSans700.load(),
    ]);
  },
};
