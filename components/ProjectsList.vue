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
import { projects } from '@/data/projects.js';

export default {
  components: {
    ProjectCard: () => import('@/components/ProjectCard.vue')
  },
  data() {
    return {
      items: projects,
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
