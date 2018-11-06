<template>
    <div class="front_animate">
        <transition name="zoom" enter-active-class="zoomIn" :duration="{ enter: 3000, leave:0 }">
            <div class="animate_center" v-if="frontShow">

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:"front_animate",
    data(){
        return {
            frontShow:false,
        }
    },
    created(){
        // setTimeout(()=>{
            // this.frontShow=true;
        // },2000)
    },
    mounted(){
        this.frontShow=true;
    }

}
</script>

<style lang="scss">
.front_animate{
    width: 100%;
    height: 100%;
    background: url(../../assets/images/front.png) no-repeat center;
    // position: relative;
    @include backgroundSize;
    @include alignCenterBox;
    .animate_center{
        width: 600px;
        height: 400px;
        background: #333;
        text-align: left;
        vertical-align: middle;
        display: inline-block;
    }
}
</style>
