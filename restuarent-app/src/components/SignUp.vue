<template>
  <img class="logo" src="../assets/resto-logo.png" />
  <h1>Sign UP</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Sign Up</button>
    <p class="h3">
      Already have an account?
      <router-link to="/Login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    validatePassword(password) {
      return password.length >= 8; 
    },

    validatename(name) {
      return name.length >= 3; 
    },

    validateForm() {
      if(!this.validatename(this.name)) {
        alert('name must be at least 3 characters');
        return false;
      }

      if(!this.validateEmail(this.email)) {
        alert('Invalid email');
        return false;
      }

      if(!this.validatePassword(this.password)) {
        alert('Password must be at least 8 characters');
        return false;
      }
      
      return true;
    },

    async signUp() {
      if(!this.validateForm()) {
        return;
      }

      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if (result.status == 201) {
        alert("sign up done");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home-c" });
      } else {
        alert("sign up error");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    if (user) {
      this.$router.push({ name: "Home-c" });
    }
  },
};
</script>

<style>
</style>