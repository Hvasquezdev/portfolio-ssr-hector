import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';

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
