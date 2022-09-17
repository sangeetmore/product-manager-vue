<template>
  
  <div>
    <v-toolbar
    class="toolbar"
    dark>
    
      <v-toolbar-title>Vue Manager</v-toolbar-title>  

      <v-toolbar-items
      class="tabs">
        <v-btn><router-link to="/"> Add Product</router-link></v-btn>
        <v-btn><router-link to="/product-list"> Products</router-link></v-btn>
        <v-btn><router-link to="/about">About</router-link></v-btn>
      </v-toolbar-items>
    
    </v-toolbar>
  </div>
  

</template>

<script>
export default {
  name : 'AppBar',
  
}
</script>

<style>

.toolbar {
  color:blueviolet !important;
}
.tabs{
  color: limegreen !important;
}

a{
  text-decoration: none !important;
  color: #ffffff !important;
}
</style>