<template>
  <div class="wrap">
    <div class="login_massage">
      <el-form ref="form" :model="form" label-width="40px">
        <el-form-item label="账号">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <div class="flex_center">
        <button class="btn_style mr10" @click="onSubmit" >登录</button>
        <button class="btn_style">去注册</button>
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
  import ajax from '@/components/network/request'

  export default {
    data () {
      return {
        form: {
          number:'',
          password:'',
        }
      }
    },
    computed: {
      ...mapGetters({}),

    },

    methods: {
      ...mapActions({}),
      onSubmit() {
        ajax("post","http://localhost:2000/login",this.form).then((data)=>{
          this.$router.replace({name:'index'})
        })
      }
    },

    beforeDestroy () {
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    .login_massage{
      width: 40vw;
      height: 45vh;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 2px solid rgba(180, 180, 180, 0.4);
      padding: 30px;
    }
  }
  .btn_style{
    width: 6vw;
    height: 40px;
    background-color: rgb(152, 204, 157,0.4);
    border: 1px solid rgb(152, 204, 157,0.4);
    color: white;
    outline: none;
    cursor:pointer;
    border-radius: 5px;
  }
</style>
