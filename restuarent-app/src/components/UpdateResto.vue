<template>
  <Header />
  <h1>Update restuarent</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restuarent.name" />
    <input type="text" name="address" placeholder="Enter Adress" v-model="restuarent.address" />
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restuarent.contact" />
    <button type="button" v-on:click="updateResto">Update restuarent</button>
  </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';

export default {
  name: 'UpdateResto',
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
    async updateResto(){
      const result = await axios.put('http://localhost:3000/restuarent/'+this.$route.params.id,{
        name:this.restuarent.name,
        address:this.restuarent.address,
        contact:this.restuarent.contact,
      })
      console.log(result)

      if(result.status == 200)
      {
        this.$router.push({name:'Home-c'})
      }
    }
  },

  async mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    const result = await axios.get('http://localhost:3000/restuarent/'+this.$route.params.id)

    // console.warn(this.$route.params.id)
    // console.log(result.data)
    this.restuarent = result.data
  },
}
</script>