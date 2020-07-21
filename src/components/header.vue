<template>
  <div class="header">
    <router-link :to="{name:'index'}" class="item">
      首页
    </router-link>
    <router-link :to="{name:'shoe_index'}" class="item">
      商品
    </router-link>
    <div class="item">
      介绍
    </div>
    <router-link :to="{name:'message_board'}" class="item">
      留言
    </router-link>
    <div class="item">
      个人中心
    </div>
  </div>
</template>

<script>
  import {
    extend
  } from 'lodash'
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({}),

    },

    methods: {
      ...mapActions({}),

    },

    beforeDestroy () {
    },
    created () {
    }
  }
</script>

<style scoped>
  .header{
    width: 150px;
    height: 80vh;
    border: 2px solid rgba(180, 180, 180, 0.3);
    position: absolute;
    top: 10vh;
    left: 15vh;
  }
  .item{
    width: 100%;
    height: 10%;
    color: white;
    font-size:22px;
    background-color: rgba(64, 158, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 5px;
  }
</style>
