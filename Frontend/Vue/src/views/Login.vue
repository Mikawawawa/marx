<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <img src="https://www.zjsru.edu.cn/__local/C/34/38/049FEFABA4D812086A2F9CEFC5A_DD0823CC_AF8A.jpg">
        <!-- <div class="md-title">浙江树人大学</div> -->
        <!-- <div class="md-title">思政测试系统</div> -->
      </div>

      <div class="form">
        <md-field>
          <label>ID号</label>
          <md-input v-model="login.id" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>密码</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <router-link to="/reset">重置密码</router-link>
        <md-button class="md-raised md-primary" @click="auth">登录</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>
    <div class="background" />
  </div>
</template>

<script>
// import request from "../service/request"
const api=require("../service/user")

export default {
  name: "App",
  data() {
    return {
      loading: false,
      login: {
        id: "",
        password: ""
      }
    };
  },
  methods: {
    async auth() {
      this.loading = true;
      let data=await api.login(this.login.id,this.login.password)
      this.loading = false;
      this.$store.commit("setUser",data.info.id)
      this.$router.push("./home")
    }
  },
  created() {
    if(this.$store.state.id){
      this.$router.push("./home")
    }
  }
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 32px;
      max-width: 80vw;
      width:240px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
