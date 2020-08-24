<template>
  <div v-show="isLoaded" ref="masonry" class="masonry">
    <template v-if="columsElements.length > 0 && isLoaded">
      <div
        v-for="(column, index) in columsElements"
        :key="index"
        class="masonry__column"
      >
        <template v-for="(item, itemIndex) in column.items">
          <project-card
            :key="item.name + itemIndex"
            :image-url="getImage(item.image)"
            :alt="item.name"
            :image-placeholder="getPlaceholderImage()"
            :technologies="item.technologies"
            :link="item.link || ''"
          ></project-card>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  components: {
    ProjectCard: () => import('@/components/ProjectCard.vue')
  },
  data() {
    return {
      items: [
        {
          image: 'daniel-web-min.jpg',
          name: 'Daniel website',
          technologies: ['HTML5', 'CSS', 'Bulma']
        },
        {
          image: 'daniel-landing-min.jpg',
          name: 'Daniel landing page',
          technologies: ['HTML5', 'CSS', 'Bulma']
        },
        {
          image: 'contraloria-intranet-min.png',
          name: 'Contraloria Municipal - Realtime messages App',
          technologies: [
            'HTML5',
            'CSS',
            'Tailwind',
            'JavaScript',
            'Vue.Js',
            'Node.Js',
            'Express.js',
            'Socket.io',
            'MySQL'
          ]
        },
        {
          image: 'fraction-min.jpg',
          name: 'Fraction website',
          technologies: ['HTML5', 'CSS', 'Bulma']
        },
        {
          image: 'marketplace-min.jpg',
          name: '15Rock Marketplace',
          technologies: ['HTML5', 'CSS', 'JavaScript', 'React.Js']
        },
        {
          image: '15rock-min.jpg',
          name: '15Rock Web App',
          technologies: ['HTML5', 'CSS: Flex - Grid', 'JavaScript']
        },
        {
          image: 'ideation-min.jpg',
          name: 'Ideation web app',
          technologies: ['HTML5', 'CSS', 'JavaScript', 'Vue.Js', 'Firebase'],
          link: 'https://ideation-vue.netlify.app/'
        },
        {
          image: 'vueMusic-comp-min.jpg',
          name: 'Vue music',
          technologies: ['HTML5', 'CSS', 'Bulma', 'JavaScript', 'Vue.Js'],
          link: 'https://github.com/Hvasquezdev/platzi-music'
        },
        {
          image: 'sparesbox-comp-min.jpg',
          name: 'Sparexbox website',
          technologies: ['HTML5', 'CSS', 'Bulma']
        },
        {
          image: 'cart-comp-min.jpg',
          name: 'FreeCodeCamp project',
          technologies: ['HTML5', 'CSS', 'Bulma', 'JavaScript', 'Vue.Js']
        },
        {
          image: 'policia-comp-min.jpg',
          name: 'Policia Municipal transit taxes app',
          technologies: [
            'HTML5',
            'CSS',
            'Bulma',
            'JavaScript',
            'Vue.Js',
            'Node.Js',
            'Express.js',
            'MySQL'
          ]
        },
        {
          image: 'countries-filter.PNG',
          name: 'FrontEnd Mentor - API Countries filter',
          technologies: ['Vue.Js 3', 'Tailwind.Css'],
          link: 'https://github.com/Hvasquezdev/countries-filter'
        },
        {
          image: 'trello-clone.png',
          name: 'Trello clone',
          technologies: ['HTML5', 'Tailwind.Css', 'JavaScript', 'Vue.Js'],
          link: 'https://dnd-trello-clone.netlify.app/'
        },
        {
          image: 'rock-paper-scissors.png',
          name: 'Paper, Rock, Scrissors game',
          technologies: ['HTML5', 'CSS', 'JavaScript'],
          link: 'https://rock-paper-scissor-js.netlify.app/'
        },
        {
          image: 'micro-jobs.png',
          name: 'Micro Jobs, Job portal',
          technologies: ['HTML5', 'Tailwind.Css', 'Vue.Js', 'Nuxt.Js']
        },
        {
          image: 'snake-game.PNG',
          name: 'Snake game',
          technologies: ['Vue.Js 3'],
          link: 'https://github.com/Hvasquezdev/vue3-snake'
        }
      ],
      columns: 1,
      columsElements: [],
      addedElements: 0,
      isLoaded: false
    };
  },
  computed: {
    itemsToRender() {
      return Math.ceil(this.items.length / this.columns);
    }
  },
  mounted() {
    this.setColumns();

    window.addEventListener('resize', this.setColumns, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setColumns, false);
  },
  methods: {
    setColumns() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        this.columns = 1;
      } else if (screenWidth >= 768 && screenWidth < 1360) {
        this.columns = 2;
      } else {
        this.columns = 3;
      }

      this.initMasonry(this.columns);
    },
    getImage(name) {
      return `/images/${name}`;
    },
    getPlaceholderImage() {
      return '/images/placeholder-image-min.jpg';
    },
    initMasonry(columns) {
      this.isLoaded = false;
      const masonry = this.$refs.masonry;

      masonry.classList.remove('columns-1', 'columns-2', 'columns-3');
      masonry.classList.add(`columns-${columns}`);
      this.createColumElements();
    },
    createColumElements() {
      this.addedElements = 0;
      let columsElements = [];

      for (let i = 0; i < this.columns; i++) {
        columsElements.push({ items: [] });
      }

      this.columsElements = columsElements;
      this.addColumnItems();
    },
    addColumnItems() {
      const itemsToRender = this.itemsToRender;
      const columns = this.columns;

      for (let i = 0; i < itemsToRender; i++) {
        for (let n = 0; n < columns; n++) {
          const items = this.items;
          const addedElements = this.addedElements;

          if (addedElements < items.length) {
            const itemToPush = items[i * columns + n];
            this.columsElements[n].items.push(itemToPush);
            this.addedElements++;
          }
        }
      }

      this.isLoaded = true;
    }
  }
};
</script>

<style lang="css" scoped>
.masonry {
  --grid-columns: 1;
  --grid-columns-gap: 30px;

  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  column-gap: var(--grid-columns-gap);
}
.masonry.columns-2 {
  --grid-columns: 2;
}
.masonry.columns-3 {
  --grid-columns: 3;
}
.masonry__column .masonry__card:not(:last-child) {
  margin-bottom: 30px;
}
</style>
