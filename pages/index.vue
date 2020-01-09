<template>
  <div id="home" class="w-full">
    <!-- BANNER -->
    <v-banner></v-banner>

    <!-- SERVICES -->
    <v-services></v-services>

    <!-- CONTACT -->
    <v-contact></v-contact>

    <!-- SKILLS -->
    <v-skills></v-skills>

    <!-- PROJECTS -->
    <v-projects></v-projects>

    <!-- REVIEWS -->
    <v-reviews></v-reviews>

    <!-- STATUS -->
    <v-status></v-status>
  </div>
</template>

<script>
const url = 'https://www.hectorvasquez.me/';
const title = 'Hector Vasquez | Portfolio';
const description =
  'Hello, I am Hector Vasquez a Front End developer, workin with JavaScript and VueJs for almost 2 years. Writing code daily in personal and profresional projects';

export default {
  name: 'Home',
  head() {
    return {
      title: title,
      meta: [
        {
          hid: 'home-description',
          name: 'description',
          content:
            'Hello, I am Hector Vasquez a Front End developer, workin with JavaScript and VueJs for almost 2 years. Writing code daily in personal and profresional projects'
        },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@HecTorVasquez97'
        },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    };
  },
  components: {
    VBanner: () => import('@/components/home/Banner.vue'),
    VServices: () => import('@/components/home/Services.vue'),
    VContact: () => import('@/components/home/Contact.vue'),
    VSkills: () => import('@/components/home/Skills.vue'),
    VProjects: () => import(/* webpackPrefetch: true */ '@/components/home/Projects.vue'),
    VReviews: () => import('@/components/home/Reviews.vue'),
    VStatus: () => import('@/components/home/Status.vue')
  }
};
</script>
