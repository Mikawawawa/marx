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
        v-bind:md-description=username
    >
    </md-empty-state>
    </md-content>
</template>

<script>
const config=require("../string.json")
export default {
  name: 'Userinfo',
  data: () => ({
      config:config,
      username:"123"
  }),
  created(){
      this.username=(this.$store&&this.$store.state.id?this.$store.state.id:"姜佐腾").slice(0,1)
  }
}
</script>

<style>
.userinfo{
    margin:50px;
}
</style>
