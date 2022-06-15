<template>
  <div>
    <header>
      <el-page-header @back="goBack"></el-page-header>
    </header>
    <hr />
    <div class="all" @submit.prevent="createUser">
      <p class="title-1 title-2">Name :</p>
      <input type="text" v-model="name" />

      <p class="title-1 title-3">Email :</p>
      <input type="email" id="email" v-model="email" />

      <p class="title-1 title-4">Password :</p>
      <input type="password" id="password" v-model="password" />

      <p class="title-1 title-5">Is Superuser :</p>
      <input type="radio" id="name" v-model="isSuperuser" /> Yes
      <input type="radio" id="name" v-model="isSuperuser" /> No
    </div>
    <button class="button">CreateUser</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: '',
      name: '',
      email: '',
      password: '',
      isSuperuser: '',
    }
  },
  methods: {
    async createUser() {
      await this.$store.dispatch('createUser')
      this.$router.push('/allusers')
    },

    goBack() {
      this.$router.push('/logs')
    },
    backFunction() {
      this.$router.push('/logs')
    },
  },
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
}
.all {
  display: block;
  text-align: center;
}
label {
  display: block;
  text-align: center;
}
.button {
  display: block;
  margin: auto;
  background: rgb(76, 136, 248);
  color: white;
  width: 250px;
  margin-top: 18px;
  font: inherit;
  /* // margin-left:17px; */
  border: 1px solid #fafcfb;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
}
input {
  width: 250px;
  padding: 5px;
  border: 2px solid #a0f8ce;
  border-radius: 10px;
  background: rgb(247, 246, 246);
}
.title-1 {
  font-weight: bold;
  margin-right: 160px;
}
.title-2 {
  display: block;
  margin-right: 11.5rem;
}
.title-3 {
  display: block;
  margin-right: 11.5rem;
}
.title-5 {
  display: block;
  margin-right: 8rem;
}
#name {
  margin-left: -80px;
  margin-right: -100px;
}
input:hover {
  background: rgb(230, 230, 230);
}
input:active {
  background: rgb(214, 196, 196);
  color: #707271;
}
.button:hover,
.button:active {
  background: rgb(182, 180, 180);
  color: #707271;
}
.button:focus {
  outline: none;
}
</style>
