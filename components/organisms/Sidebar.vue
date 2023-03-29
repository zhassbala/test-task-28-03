<template>
  <div class="bg-blue-100 rounded grid gap-2 p-2">
    <SidebarItem
      v-for="(name, index) in categories"
      :key="index"
      :category-name="name"
      :active="
        $store.state.catalog.selectedCategory === name &&
        $route.path.startsWith('/catalog')
      "
    ></SidebarItem>
    <router-link
      to="/favourites"
      active-class="bg-blue-200"
      class="px-4 py-2 hover:bg-blue-200 transition text-blue-500 hover:cursor-pointer rounded capitalize"
    >
      My Favourite
    </router-link>
  </div>
</template>

<script lang="ts">
import SidebarItem from '../molecules/SidebarItem.vue'
import { categories, Category } from '~/types'

export default {
  name: 'ISidebar',
  components: {
    SidebarItem,
  },
  setup() {
    return { categories: ['all', ...categories] as Array<Category | 'all'> }
  },
}
</script>
