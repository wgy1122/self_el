<template>
    <div class="asideRouter">
        <router-link class="router_list"  :to="{path:item.pathname,params:{name:item.name}}" tag="div" active-class="routerActive" v-for="(item,index) in routerData" :key="index" >{{item.name}}</router-link>
    </div>
</template>

<script>
export default {
    name:"asideRouter",
    data(){
        return {
            routerData:[
                {"name":"页面1","path":"/main/home","pathname":"home"},
                {"name":"页面2","path":"/main/home2","pathname":"home2"},
                // {"name":"页面3","path":"/main/home3"},
            ]
        }
    }
}
</script>

<style lang="scss">
.asideRouter{
    width: 201px;
    height: 100%;
    background: #ccc;
    border-right: 1px solid #ccc;
    position: fixed;
    left: 0;
    top:0;
    .router_list{
        width: 100%;
        background: #fff;
        @include fontActive;
        &:hover{
            background: #ecf5ff;
        }
        &.routerActive{
            background: #72beff;
            color:#fff;
        }
    }
}
</style>
