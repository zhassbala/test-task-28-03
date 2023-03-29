<template>
  <div class="grid grid-cols-3 gap-2">
    <ItemCard v-for="item in likedItems" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemCard from '../molecules/ItemCard.vue'
import { Item } from '~/types'

export default defineComponent({
  components: {
    ItemCard,
  },
  computed: {
    likedItems() {
      return this.$store.state.catalog.items.filter((el: Item) =>
        this.$store.state.catalog.likedItems.includes(el.id)
      )
    },
  },
})
</script>
