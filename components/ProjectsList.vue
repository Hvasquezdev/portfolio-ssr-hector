<template>
  <div v-show="isLoaded" ref="masonry" class="masonry">
    <div
      v-for="(column, index) in columsElements"
      :key="index"
      class="masonry__column"
    >
      <template v-for="(item, itemIndex) in column.items">
        <div :key="item.name + itemIndex" class="masonry__card relative">
          <div class="masonry__card__overlay absolute w-full h-full"></div>
          <img
            :src="require(`~/assets/images/${item.image}`)"
            :alt="item.name"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'project-01.png',
          name: 'project 01'
        },
        {
          image: 'project-02.png',
          name: 'project 02'
        },
        {
          image: 'project-03.png',
          name: 'project 03'
        },
        {
          image: 'project-04.png',
          name: 'project 04'
        },
        {
          image: 'project-05.png',
          name: 'project 05'
        },
        {
          image: 'project-06.png',
          name: 'project 06'
        }
      ],
      columns: 3,
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
    this.initMasonry(this.columns);
  },
  methods: {
    initMasonry(columns) {
      this.isLoaded = false;
      const masonry = this.$refs.masonry;

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
      for (let i = 0; i < this.itemsToRender; i++) {
        for (let n = 0; n < this.columns; n++) {
          if (this.addedElements < this.items.length) {
            const itemToPush = this.items[i * this.columns + n];
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
.masonry__card {
  border-radius: 14px;
  overflow: hidden;
}
.masonry__card__overlay {
  background: theme('colors.grey.primary');
  background: -webkit-linear-gradient(
    to top,
    theme('colors.dark.primary'),
    theme('colors.dark.secondary')
  );
  background: linear-gradient(
    to top,
    theme('colors.dark.primary'),
    theme('colors.dark.secondary')
  );
  opacity: 0.30;
}
.masonry__column .masonry__card:not(:last-child) {
  margin-bottom: 30px;
}
.masonry img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
