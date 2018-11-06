<template>
    <div class="Main">
        <router-view></router-view>

        <lw-asideRouter></lw-asideRouter>
    </div>
</template>

<script>
import AsideRouter from "../AsideRouter"
export default {
    data(){
        return {

        }
    },
    components:{
        "lw-asideRouter":AsideRouter
    }
}
</script>

<style lang="scss">
</style>
