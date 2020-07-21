<template>
  <div class="wrap">
      <el-scrollbar style="height: 100%">
        <div class="content">
          <div class="item" v-for="(item,index) in commodityList" :key="index">
            <img :src="item.imgUrl" alt="" >
            <p :title="item.name" class="commodity_name">{{item.name}}</p>
            <p class="commodity_price">价格：{{item.price}}</p>
          </div>
        </div>
      </el-scrollbar>
    <h1>这是分页</h1>
  </div>
</template>

<script>
  import {
    extend
  } from 'lodash';
  import ajax from '@/components/network/request'

  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    data () {
      return {
        commodityList:[],
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
      ajax("GET","http://localhost:3000/user").then((data)=>{
        console.log(data)
        this.commodityList = data.list;
      })
    }
  }
</script>

<style scoped>
  .wrap{
    height: 100%;
    padding: 20px 20px 60px 20px;
  }
  .content{
    display: flex;
    flex-flow: row wrap;
  }
  .item{
    width: 300px;
    height: 300px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .item img{
    width: 100%;
    height: 60%;
    display: block;
  }
  .commodity_name{
    margin-top: 20px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .commodity_price{
    margin-top: 20px;
    font-size: 16px;

  }
  >>>.el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
