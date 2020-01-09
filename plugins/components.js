import Vue from 'vue';

const BaseButton = () => import('~/components/BaseButton.vue');

Vue.component('base-button', BaseButton);
