<template>
  <div class="social-links flex items-center justify-center absolute z-10">
    <ul class="flex">
      <li class="flex">
        <a
          href="https://github.com/Hvasquezdev"
          target="_blank"
          aria-label="github link"
          rel="noreferrer"
          class="w-full h-full flex items-center justify-center shadow"
        >
          <client-only>
            <font-awesome-icon :icon="['fab', 'github']" />
          </client-only>
        </a>
      </li>
      <li class="flex">
        <a
          href="https://twitter.com/HecTorVasquez97"
          target="_blank"
          aria-label="twitter link"
          rel="noreferrer"
          class="w-full h-full flex items-center justify-center shadow"
        >
          <client-only>
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </client-only>
        </a>
      </li>
      <li class="flex">
        <a
          href="https://www.linkedin.com/in/hector-vasquez-dev/"
          target="_blank"
          aria-label="linkedin link"
          rel="noreferrer"
          class="w-full h-full flex items-center justify-center shadow"
        >
          <client-only>
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </client-only>
        </a>
      </li>
    </ul>

    <base-button
      class="font-semibold flex items-center justify-center"
      bordered
      rounded
      transparent
      @click.native="goFiverr"
    >
      Fiverr
    </base-button>
  </div>
</template>

<script>
export default {
  name: 'SocialButtons',
  components: {
    BaseButton: () => import('@/components/BaseButton.vue')
  },
  methods: {
    goFiverr() {
      const url = 'https://www.fiverr.com/hector398';
      window.open(url, '_blank');
    }
  }
};
</script>

<style lang="css" scoped>
.social-links {
  bottom: 30px;
}
.social-links ul {
  margin-right: 12px;
}
.social-links ul li {
  width: 48px;
  height: 48px;
  font-size: 20px;
}
.social-links ul li:not(:last-child) {
  margin-right: 12px;
}
.social-links ul li a {
  background-color: theme('colors.yellow.primary');
  border-radius: 15101997px;
  border: 2px solid theme('colors.yellow.primary');
  color: theme('colors.dark.primary');
  transition: all 0.3s;
  outline: none;
}
.social-links ul li a:hover {
  background-color: transparent;
  color: theme('colors.yellow.primary');
}
.social-links ul li a svg {
  width: 20px;
}
.social-links .button {
  font-size: 20px;
  padding: 0 40px;
  height: 48px;
  outline: none;
}
</style>
