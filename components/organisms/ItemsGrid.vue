<template>
  <div class="grid grid-cols-3 gap-2">
    <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
// import { mapGetters } from 'vuex'
import ItemCard from '../molecules/ItemCard.vue'

export default {
  components: {
    ItemCard,
  },
  computed: {
    filteredItems() {
      return this.$store.getters['catalog/filteredItems']
    },
  },
}
</script>
