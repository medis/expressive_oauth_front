<template>
  <div id="app" class="container flex content-center mx-auto w-full py-8 h-screen items-center">
    <div class="bg-white shadow-md rounded rounded mx-auto">
      <Login v-if="!user"/>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'app',
  data: function() {
      return {
          user: window.App && window.App.user ? window.App.user : false
      }
  },
  components: {
      Login
  }
}
</script>

<style>
</style>
