<template>
  <div class="grid grid-cols-3 gap-2">
    <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemCard from '../molecules/ItemCard.vue'

export default defineComponent({
  components: {
    ItemCard,
  },
  computed: {
    filteredItems() {
      return this.$store.getters['catalog/filteredItems']
    },
  },
})
</script>
