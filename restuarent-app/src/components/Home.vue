<template>
  <Header />
  <h1>Hello {{ name }},Welcome Our Home Page</h1>

  <table>
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
        <button class="button" v-on:click="updateResto(item.id)">Update</button>
        <button class="button" v-on:click="deleteResto(item.id)">Delete</button>
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
      this.name = user ? JSON.parse(user).name :'';

      if (!user) {
        this.$router.push({ name: "Login-c" });
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
table,td,th {
  border: 1px solid;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgb(197, 47, 135);
  border-collapse:collapse;
}

td,th {
  width: 160px;
  height: 40px;
}
/* .button{
  color: rgb(255, 255, 255);
  background-color: rgb(197, 47, 135);
  border: none;
  padding: 5px;
  margin: 2px 5px;
}

.button:hover{
  color: rgb(255, 255, 255);
  background-color: rgb(243, 53, 161);
} */


.button {
  background: rgb(197, 47, 135);
  border: 1px solid rgb(197, 47, 135);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  outline: 0;
  padding: 6px;
  margin: 2px 5px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.button:hover,
.button:active {
  background-color: initial;
  background-position: 0 0;
  color: rgb(197, 47, 135);
}

.button:active {
  opacity: .5;
}

.h3{
  color: rgb(110, 110, 110);
  font-weight: 300;
  text-decoration: none;
}

</style>

<!-- HTML !-->
<button class="button-24" role="button">Button 24</button>

