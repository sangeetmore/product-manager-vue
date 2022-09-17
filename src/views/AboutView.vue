<template>
  <v-app>
    <app-bar/>
    <h1>This is an about page</h1>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar.vue'
export default {
  name:'AboutView',
  components:{
    AppBar,
  }
}
</script>
