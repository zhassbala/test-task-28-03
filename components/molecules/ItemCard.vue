<template>
  <div class="p-4 rounded-lg transition shadow-md flex flex-col gap-2">
    <div class="image-container h-[300px]">
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div>
      <router-link to="/catalog">
        <span class="hover:underline">{{ item.name }}</span>
      </router-link>
    </div>
    <div class="flex items-center justify-between">
      <div class="text-sm bg-gray-100 text-gray-500 rounded px-1">
        {{ item.category }}
      </div>
      <div class="flex justify-between gap-2 items-center">
        <font-awesome-icon
          icon="fa-solid fa-heart"
          class="cursor-pointer hover:text-red-600 transition text-xl"
          :class="{ 'text-red-600': isLiked, 'text-gray-400': !isLiked }"
          @click="handleLikeItem"
        />
        <font-awesome-icon
          icon="fa-solid fa-cart-plus"
          class="text-lg cursor-pointer"
        />
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex gap-1">
        <div class="text-sm bg-blue-100 text-blue-500 rounded px-1">
          <span class="underline">{{ item.orderCount }}</span> orders
        </div>
        <div class="text-sm text-gray-500 rounded px-1">
          In stock: <span class="underline">{{ item.leftInStock }}</span>
        </div>
      </div>
      <div class="text-lg">{{ item.price }}$</div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { Item } from '~/types'

export default defineComponent({
  components: {},
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
  },
  computed: {
    isLiked() {
      return this.$store.state.catalog.likedItems.includes(this.item.id)
    },
  },
  methods: {
    handleLikeItem() {
      if (this.isLiked) {
        this.$store.commit('catalog/unlikeItem', this.item)
      } else {
        this.$store.commit('catalog/likeItem', this.item)
      }
    },
  },
})
</script>
