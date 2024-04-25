<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

body{
  margin: 0;
  padding: 0;
}

.logo {
  width: 80px;
  margin-top: 30px;
}
.register input, .login input, .add input{
  width: 300px;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 1px solid palevioletred;
  border-radius: 6px;
  padding-left: 10px;
}

.register button, .login button, .add button{
  width: 310px;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background-color: rgb(211, 34, 93);
  border-radius: 6px;
  border: none;
}
</style>

