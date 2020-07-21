<template>
  <div class="hello">
  </div>
</template>

<script>

  export default {
    data () {
      return {
        superLottoList:[],
        superLottoList2:[]
      }
    },

    methods:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    padding: 40px;
  }
  .super_lotto{
    display: flex;
    margin-top: 10px;
  }
  .ball{
    width: 40px;
    height: 40px;
    background-color: #F56C6C;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 10px;
  }
  .back_zone{
    width: 40px;
    height: 40px;
    background-color: #409EFF !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 10px;
  }

</style>
