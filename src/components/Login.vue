<template>
  <div class="max-w-xs w-full px-8 pt-6 pb-8">
    <form action="POST">
      <label for="username" class="label">Username
        <input id="username" class="input" type="text" name="username" placeholder="Username" />
      </label>
      <label for="password" class="label">Password
        <input id="password" class="input" type="password" placeholder="Password" />
      </label>

      <div class="flex items-center justify-between">
        <button @click.prevent="signin" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign in</button>
        <a href="#" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">Register</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
      signin() {
          axios.post(`${process.env.VUE_APP_API}/api/user/login`, [])
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
      }
  }
}
</script>

<style scoped>

</style>
