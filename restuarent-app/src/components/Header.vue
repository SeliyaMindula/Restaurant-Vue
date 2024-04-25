<template>
<div class="nav">
    <router-link to="/" href="/">Home</router-link>
    <router-link to="/Add">Add restuarent</router-link>
    <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<script>

export default {
    name:'Header-c',
    methods:{
        logout(){
           localStorage.clear();
           this.$router.push({name:'Login-c'})
        },

      
    }
}
</script>

<style>
.nav{
    background-color: rgb(204, 83, 124);
    overflow: hidden;
}

.nav a {
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background-color: rgb(255, 255, 255);
    color: rgb(204, 7, 73);
}
</style>