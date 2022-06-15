<template>
  <div class="all">
    <header>
      <h3>Log App</h3>
      <nav class="main-nav">
        <ul class="main-nav_items">
          <br /><br />
          <li class="main-nav_item">
            <a href="/userprofile">Profile</a>
          </li>
          <!-- <br /><br />
          <li class="main-nav_item">
            <a href="#">About</a>
          </li> -->
        </ul>
      </nav>
      <div class="manage">
        <el-dropdown>
          <span class="el-dropdown-link">
            Manage <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><el-link
                href="/createuser"
                target="_blank"
                >Create User</el-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><el-link
                href="/updateuser"
                target="_blank"
              >
                Update User
              </el-link></el-dropdown-item
            >
            <el-dropdown-item
              ><el-link
                href="/allusers"
                target="_blank"
                >All Users</el-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><el-link
                href="http://localhost:3000/createtag"
                target="_blank"
              >
                Create Tag
              </el-link></el-dropdown-item
            >
            <!-- <el-dropdown-item>Action 5</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <hr />
      <!-- <div>
        <h4>All Logs</h4>
      </div>  -->
      <div id="logs">
        <input
          type="text"
          class="search-bar"
          v-model="search"
          placeholder="Search logs"
        />
      </div>
      <span class="date">Sort by DateTime:</span>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="Select 'from' date-time"
          
          :picker-options="pickerOptions"
        >
        </el-date-picker>
        <br />
        <!-- <p>to</p> -->
        <el-date-picker
          v-model="value"
          type="datetime"
          placeholder="Select 'to' date-time"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
        <div>
          <el-select class="filter" v-model="value2" placeholder="Filter">
            <!-- <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> -->
            <el-option>Tag Title</el-option>
            <el-option>Unseen</el-option>
            <el-option>All</el-option>
            <el-option>By UserId</el-option>
            <el-option>Bin</el-option>
          </el-select>
        </div>
      </div>
    </header>
    <br />
    <br />
    <!-- <div class="log-item">
      <input
        class="text"
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
      /> -->
    <!-- <input class="text1" type="text" /> -->
    <!-- <input type="text" v-model="enteredGoalValue" />
      <button @click="addGoal">Add</button>
      <p v-if="goals.length === 0">No goals have been added yet</p>
      <ul v-else>
        <li v-for="goal in goals" v-bind:key="goal" @click="removeGoal">
          <p>{{ goal }}</p>
          <input type="text" @click.stop />
        </li>
      </ul>
      <div class="buttons">
        <br />
        <button class="btn-1">Update</button>
        <button class="btn-2">Delete</button>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      filter: '',
      value: '',
      options: '',
      //   value1: '',
      //   value2: '',
      //   enteredGoalValue: '',
      //   goals: [],

      pickerOptions: {
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            },
          },
          {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            },
          },
          {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            },
          },
        ],
      },
      // value1: '',
      // value2: '',
      // value3: '',
    }
  },

  async mounted() {
    await this.$store.dispatch('getAllLogs')
  },
  methods: {
    async DeleteLog() {
      console.log('deletemethod called')
      await this.$store.dispatch('deleteLog', this.LogId)
      this.$router.push('/logs')
    },
  },
  // methods: {
  //   addGoal() {
  //     this.goals.push(this.enteredGoalValue)
  //     this.enteredGoalValue = ''
  //   },
  //   removeGoal() {
  //     this.goals.splice(1)
  //   },
  // },
}
</script>
<style>
body {
  background: whitesmoke;
  width: 100%;
  height: 100%;
}
hr {
  border: 1px solid rgb(92, 90, 90);
  /* text-decoration: none; */
}
.manage {
  display: block;
  text-align: right;
  /* align-items: right; */
  margin-right: 1.5rem;
  margin-top: -2rem;
  /* font-size: 2.5rem; */
  font-weight: bolder;
  /* font-weight: bolder; */
}
.main-nav {
  display: inline-block;
  text-align: right;
  width: calc(100% - 50px);
  vertical-align: middle;
  margin-top: -170px;
  /* margin-right: 100px; */
}

.main-nav_items {
  /* margin-left: ; */

  padding: 0;
  list-style: none;
  /* padding-left: 1000px; */
}

.main-nav_item {
  /* display: inline-block; */
  margin: 0px 1rem;
  /* font-size: 1.232rem;
  font-weight: bolder; */
}

.main-nav_item a {
  text-decoration: none;
  color: #272727;
  font-weight: bold;
  padding: 8px;
  background-color: white;
  border-radius: 15px;
  margin-right: -40px;
  /* margin: 10px 0px; */
}

.main-nav_item a:hover,
.main-nav_item a:active {
  color: rgb(65, 64, 64);
  border: 1px solid rgb(49, 45, 45);
  border-radius: 10px;
  background: rgb(255, 255, 255);
}
.block {
  display: block;
  text-align: right;
  margin-right: 1rem;

  /* width:90%; */
}
h3,
h4 {
  display: block;
  text-align: center;
  font-size: xx-large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h4 {
  display: block;
  text-align: center;
  margin-top: -30px;
  font-size: x-large;
  background: rgb(161, 173, 185);
  width: 100%;
  border: 2px solid white;
  border-radius: 10px;
  font-family: cursive;
}
.filter {
  display: block;
  font-weight: bold;
  font-size: large;
  width: 11%;
  padding: 3px;
  margin-top: -2.8rem;
}
.search-bar {
  display: block;
  padding: 3px;
  border-radius: 10px;
  /* margin-top:-16.17rem; */
  margin: 8px;
  width: 10%;
  height: 30px;
  font-size: medium;
  font-weight: 600;
}
.date {
  display: block;
  text-align: right;
  margin-right: 4.7rem;
  margin-top: -50px;
  font-weight: lighter;
  font-size: large;
}
p {
  display: block;
  font-weight: lighter;
  font-size: larger;
  margin: 0px;
  margin-left: 5rem;
}
/* .log-item { */
/* display: block; */
/* align-items: center; */
/* text-align: center; */
/* } */
.text1 {
  /* display: block; */
  width: 50%;
  border: 2px solid gray;
  padding: 8px;
}
button {
  /* margin-left:6rem; */
  padding: 7px;
}
.buttons {
  text-align: right;
  margin-right: 2.6rem;
  margin-top: -3rem;
}
.btn-1 {
  background-color: rgb(251, 252, 249);
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #fafcfb;
  font-weight: bold;
}
.btn-1:hover,
.btn-1:active {
  background: rgb(245, 243, 243);
  color: #04f77e;
}
.btn-1:focus {
  outline: none;
}
.btn-2 {
  background-color: rgb(238, 13, 13);
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #fafcfb;
  font-weight: bold;
}
.btn-2:hover,
.btn-2:active {
  background: rgb(247, 245, 245);
  color: #4d4e4e;
}
.btn-2:focus {
  outline: none;
}
</style>
