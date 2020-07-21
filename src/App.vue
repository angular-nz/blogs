<template>
  <div id="app">
    <template v-if="true" >
      <headers></headers>
      <div class="content">
        <router-view></router-view>
      </div>
    </template>
    <div v-else>
      <login></login>
    </div>
  </div>
</template>

<script>
  import header from "./components/header"
  import login from '@/views/user/login'
  export default {
    data(){
      return {

      }
    },
    components:{
      headers:header,
      login,
    }
  }
</script>
<style scoped>
  #app{
    height: 100vh;
    background-image:url("./assets/img/body_bc.jpg");
    background-repeat:no-repeat ;
    background-size:100% 100%;
    background-attachment:fixed;
    overflow: hidden;
  }
  .content{
    width: 70vw;
    height: 80vh;
    margin: 0 auto;
    max-height: 80vh;
    border: 2px solid rgba(180, 180, 180, 0.4);
    border-radius: 5px;
    position: absolute;
    right: 10vh;
    top: 10vh;
  }



</style>
