<template>
    <md-list>
        <md-list-item @click="gohome()">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">主页</span>
        </md-list-item>


        <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Spam</span>
        </md-list-item>
    </md-list>
</template>

<script>
export default {
    name:"menulist",
    methods:{
        gohome(){
            this.$router.push("/")
        }
    }
}
</script>
