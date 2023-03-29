<template>
  <div
    class="px-4 py-2 hover:bg-blue-200 transition text-blue-500 hover:cursor-pointer rounded capitalize"
    :class="{ 'bg-blue-200': active }"
    @click="handleClick"
  >
    {{ categoryName }}
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import type { Category } from '~/types'

export default defineComponent({
  props: {
    categoryName: {
      type: String as PropType<Category | 'all'>,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('catalog/changeCategory', this.categoryName)
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    },
  },
})
</script>
