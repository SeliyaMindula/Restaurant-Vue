<template>
  <img class="logo" src="../assets/resto-logo.png" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">Login</button>
    <p class="h3">
      Create a new account?
      <router-link to="/SignUp">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login-c",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {

    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      if (!this.email || !this.password) {
        alert("Please enter your email and password");
        return;
      }

      if (result.status == 200 && result.data.length == 1) {
        alert("Login successful");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home-c" });
      }
      else {
        alert("Invalid username or password");
      }

      console.warn(result);
      console.warn(this.email, this.password);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    if (user) {
      this.$router.push({ name: 'Home-c' })

    }
  }
};
</script>
