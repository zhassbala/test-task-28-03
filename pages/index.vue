<template>
  <div class="text-center">
    <TheHeader></TheHeader>
    <h1>Welcome!</h1>
    <router-link to="/catalog" class="text-blue-700 hover:underline"
      >Proceed to Catalog</router-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
