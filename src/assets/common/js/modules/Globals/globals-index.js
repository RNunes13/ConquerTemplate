
import globalsSetGlobals from './globals-setGlobals';
import globalsFonts from './globals-fonts';
import globalLazy from './globals-lazy';

export default {
  init() {
    globalsSetGlobals.init();
    globalsFonts.init();
    globalLazy.init();
  },
};
