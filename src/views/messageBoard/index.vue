<template>
  <div class="wrap">
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <div class="btn">
      <el-button type="success">发表</el-button>
    </div>

    <div class="message_item">
      <div>
        <div class="item_left">
          <img src="../../../src/assets/img/head.jpg" alt="">
          <span>胖虎</span>
        </div>
        <p>我胖虎愿称你为最强</p>
      </div>
      <div class="item_right">
        <p>16楼  2012-2-5  15:20:59</p>
        <div>回复</div>
      </div>
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
      return {
        textarea:''
      }
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

<style lang="scss" scoped>
  .wrap{
    padding: 20px;
  }
  .btn{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .message_item{
    display: flex;
    justify-content: space-between;
    .item_left{
      display: flex;
      align-items: center;
      img{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .item_right{
      position: relative;
      div{
        position: absolute;
        right: 0;
      }
    }
  }
</style>
