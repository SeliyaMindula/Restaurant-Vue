<template>
  <Header />
  <h1>Add restuarent</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restuarent.name"/>
    <input type="text" name="address" placeholder="Enter Adress" v-model="restuarent.address"/>
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restuarent.contact"/>
    <button type="button" v-on:click="addResto">Add New restuarent</button>
  </form>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "AddResto",
  components: {
    Header,
  },
  data() {
    return {
      restuarent: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addResto(){
      const result = await axios.post('http://localhost:3000/restuarent',{
        name:this.restuarent.name,
        address:this.restuarent.address,
        contact:this.restuarent.contact,
      })
      console.log(result)

      if(result.status == 201)
      {
        this.$router.push({name:'Home-c'})
      }

    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
