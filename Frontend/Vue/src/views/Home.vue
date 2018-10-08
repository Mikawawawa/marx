<template>
<BasicLayout>
    <UserInfo/>
</BasicLayout>
</template>

<script>
import BasicLayout from "../components/BasicLayout.vue"
import UserInfo from "../components/Userinfo.vue"

export default {
    name:"UserHome",
    components:{
        BasicLayout,
        UserInfo
    },
    data:()=>({

    })
}
</script>

