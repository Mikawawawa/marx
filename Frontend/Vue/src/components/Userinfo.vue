<template>
    <md-content class="userinfo">
    <md-empty-state class="md-primary">
        <!-- avatar -->
      <md-avatar class="md-avatar-icon md-large md-primary" style="min-height:128px;min-width:128px;">
        <md-ripple style="min-height:128px;min-width:128px;font-size:48px">{{username}}</md-ripple>
      </md-avatar>
    </md-empty-state>
    <md-empty-state
        md-label="用户类别"
        v-bind:md-description=usertype
    >
        <md-content class="md-body">
            点击左侧菜单按钮开始使用
        </md-content>
    </md-empty-state>
    </md-content>
</template>

<script>
const config=require("../string.json")
export default {
  name: 'Userinfo',
  data: () => ({
      config:config,
      username:"",
      usertype:""
  }),
  created(){
      this.username=(this.$store&&this.$store.state.id?this.$store.state.id:"未知").slice(0,1)
      this.usertype=this.$store.state.typetext?this.$store.state.typetext:"未知用户"
  }
}
</script>

<style>
.userinfo{
    margin:50px;
}
</style>
