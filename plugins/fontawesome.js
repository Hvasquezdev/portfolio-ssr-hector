import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faGithub,
  faLinkedinIn,
  faTwitter,
  faHeart,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt
);

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);
