<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="logout()">
              <md-icon>logout</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-offset">
            <span class="md-title">
                {{config.title}}
            </span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="menuVisible =!menuVisible">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <MenuList />
      </md-app-drawer>

      <md-app-content @click="closeDrawer()">
        <slot></slot>
      </md-app-content>

    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    height:100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
const config=require("../string.json")
import MenuList from "./Menu.vue"

export default {
  name: 'BasicLayout',
    components:{
        MenuList
    },
    data: () => ({
        menuVisible: false,
        config:config
    }),
    methods:{
        gohome(){
            this.$router.push("/")
        },
        closeDrawer(){
            if(this.menuVisible==true)
            this.menuVisible=false
        },
        logout(){
            this.$store.commit("deleteUser")
            this.$router.push("/")
        }
    }
}
</script>