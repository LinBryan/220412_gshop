<template>
  <div>
    <router-view></router-view>
   <FooterGuide v-show="$route.meta.showfooter"/>


  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    color red

</style>