<template>
  <div>
    <TheHeader></TheHeader>
    <div class="container m-auto grid grid-cols-6 gap-2">
      <div class="col-span-2">
        <Sidebar />
      </div>
      <div class="col-span-4 grid gap-2">
        <IFilter />
        <ItemsGrid />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Catalog as CatalogState } from '@/types'
import Sidebar from '~/components/organisms/Sidebar.vue'
import IFilter from '~/components/organisms/Filter.vue'
import ItemsGrid from '~/components/organisms/ItemsGrid.vue'
export default defineComponent({
  components: {
    Sidebar,
    IFilter,
    ItemsGrid,
  },
  setup() {
    const state = ref<CatalogState>(new CatalogState())
    return { state }
  },
  async fetch() {
    await this.$store.dispatch('catalog/fetchItems')
  },
  mounted() {
    this.$store.commit('catalog/initLikedItems')
  },
})
</script>
