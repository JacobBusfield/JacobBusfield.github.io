import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2962FF',
        // secondary: colors.grey.darken1,
        // accent: colors.shades.black,
        // error: colors.red.accent3,
      },
      dark: {
        // primary: colors.blue.lighten3,
      },
    },
  },
});
