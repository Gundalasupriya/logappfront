<template>
  <div>
    <header>
      <el-page-header @back="goBack"></el-page-header>
    </header>
    <hr />
    <div class="all" @submit.prevent="updateUser">
      <p class="title-1 title-2">Name :</p>
      <input type="text" v-model="name" />

      <p class="title-1 title-3">Email :</p>
      <input type="email" id="email" v-model="email" />

      <p class="title-1 title-4">Current Password :</p>
      <input type="password" id="Current password" v-model="currentPassword" />

      <p class="title-1 title-4">New Password :</p>
      <input type="password" id="New password" v-model="newPassword" />
      <br /><br />
      <!-- <p class="title-1 title-4">Status :</p>
      <input type="password" id="password" v-model="password" /> -->
      <button class="button">Update User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: '',
      newPassword: '',
      currentPassword: '',
      email: '',
      name: '',
      // backButtonPressed:'',
    }
  },
  methods: {
    async updateUser() {
      await this.$store.dispatch('updateUser')
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

// async goBack() {
//   //  await this.$store.dispatch('updateUser')
//   this.$router.push('/logs')
// },
// mounted: {
// backButtonPressed() {},
// },
</script>

<style>
body {
  display: block;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: whitesmoke;
}
.all {
  background-color: white;
  display: block;
  text-align: center;
  width: 25rem;
  margin: 1px auto;
  border: 1px solid #d4fde9;
  border-radius: 10px;
  box-shadow: #707271 0px 5px 17px;
  /* height: 100%; */
}
label {
  display: block;
  text-align: center;
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
.title-4 {
  display: block;
  margin-right: 7.5rem;
}
/* .title-5 {
  display: block;
  margin-right: 8rem; */
/* } */
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
.button {
  display: block;
  margin: auto;
  background: rgb(76, 136, 248);
  color: white;
  width: 250px;
  margin-top: 18px;
  margin-bottom: 30px;
  font: inherit;
  /* // margin-left:17px; */
  border: 1px solid #fafcfb;
  padding: 8px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
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
