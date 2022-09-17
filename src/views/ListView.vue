<template>
  <v-app>
    <app-bar/>
    <list-product/>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import ListProduct from '@/components/ListProduct.vue'
export default {
  components: {
    ListProduct,
    AppBar
  },
  methods:{
    
  }

}
</script>

<style>


</style>