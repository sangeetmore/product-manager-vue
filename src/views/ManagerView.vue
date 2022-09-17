<template>
  <div>
    <manager-app/>
  </div>
</template>

<script>
// @ is an alias to /src
import ManagerApp from '@/components/ManagerApp.vue'

export default {
  name: 'HomeView',
  components: {
    ManagerApp,
  },
}
</script>

