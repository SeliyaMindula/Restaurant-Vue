<template>
  <Header />
  <h1>Hello {{ name }},Welcome Our Home Page</h1>

  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in restuarent" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <!-- <router-link :to="'/Update/' + item.id">Update</router-link> -->
        <button v-on:click="updateResto(item.id)">Update</button>
        <button v-on:click="deleteResto(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Home-c",
  data() {
    return {
      name: "",
      restuarent: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    updateResto(id){
      this.$router.push({ path: "/Update/"+ id });
    },
    async deleteResto(id) {
      // console.log(id)
      let result = await axios.delete("http://localhost:3000/restuarent/" + id);
      // console.log(result.status)
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;

      if (!user) {
        this.$router.push({ name: "SignUp" });
      }

      let result = await axios.get("http://localhost:3000/restuarent");
      this.restuarent = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(197, 47, 135);
}
td,
th {
  width: 160px;
  height: 40px;
}
</style>
