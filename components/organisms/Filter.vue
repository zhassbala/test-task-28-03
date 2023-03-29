<template>
  <div class="rounded">
    <div class="sort-options bg-gray-100 p-2 rounded">
      <span>Sort by</span>
      <select
        :value="$store.state.catalog.sortBy"
        class="bg-gray-200 p-1 rounded cursor-pointer"
        @change="handleChange"
      >
        <option value="all">All</option>
        <option value="-price">↑Price</option>
        <option value="+price">↓Price</option>
        <option value="orderCount">Order count</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IFilter',
  components: {},
  methods: {
    handleChange(e: Event) {
      this.$store.commit(
        'catalog/changeSort',
        (e.target as HTMLInputElement).value
      )
    },
  },
}
</script>
