
import CacheSelectors from './__cache-selectors';

const El = CacheSelectors.header;

export default {
  init() {
    this.alterBackgroundColor();
    this.setLinkActive();
    this.setScrollAction();
    this.onClickMenuButton();
  },

  alterBackgroundColor() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > (windowHeight * 0.3)) El.self.classList.remove('transparent');
    else El.self.classList.add('transparent');
  },

  setLinkActive() {
    //
  },

  setScrollAction() {
    window.addEventListener('scroll', () => {
      this.alterBackgroundColor();
      this.setLinkActive();
    });
  },

  onClickMenuButton() {
    El.menu.addEventListener('click', () => {
      const navbarHeight = El.navbar.clientHeight;
      const windowHeight = window.innerHeight;

      if (!El.navbar.classList.contains('is--active') && navbarHeight >= windowHeight) {
        El.navbar.classList.add('has--scroll');
      } else {
        El.navbar.classList.remove('has--scroll');
      }

      El.navbar.classList.toggle('is--active');
    });
  },
};
