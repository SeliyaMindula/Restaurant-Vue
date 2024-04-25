<template>
    <img class="logo" src="../assets/resto-logo.png">
    <h1>Sign UP</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/Login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'SignUp',
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp()
        {
            let result  = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password

            });

            console.log(result);
            if(result.status==201){
                alert("sign up done");
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name: 'Home-c'})
            }
            else{
                alert("sign up error")
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem("user-info");

        if(user)
        {
            this.$router.push({name: 'Home-c'})

        }
    }
}
</script>

<style>

</style>