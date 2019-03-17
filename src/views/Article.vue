<template>
  <div class="index" v-if="tableData">
    <p class="tag">lulujiang的个人博客</p>
    <div class="container">
      <div class="inner">
        <h1>{{tableData.title}}</h1>
        <p class="time">{{tableData.createTime}}</p>
        <div v-html="tableData.text"></div>
      </div>
    </div>
    <div class="container-mirror"></div>
  </div>
</template>

<script>
  import {
    get
  } from '../service/axios'
  export default {
    data() {
      return {
        tableData: null
      }
    },
    created() {
      get('/article/get', {
        id: this.$route.params.id
      }).then(res => {
        this.tableData = res.data;
      })
    },
    methods: {

    }
  }

</script>

<style lang="less" scoped>
  .index {
    position: absolute;
    top: 0px;
    left: 0px;
    height: calc(100% - 80px);
    width: calc(100% - 80px);
    padding: 40px;
    text-align: left;
    background: whitesmoke;
    background-size: cover;
    overflow: hidden;
    background: url(../assets/bg2.png) no-repeat fixed;
    background-size: cover;

    .tag {
      height: 40px;
      color: orange;
    }

    .container {
      position: relative;
      z-index: 1;
      height: 90%;
      margin: 10px auto;
      overflow: auto;

      .time {
        margin-bottom: 40px;
        color: #d3d3d3;
      }

      .inner {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        color: white;
        box-sizing: border-box;
      }
    }

    .container-mirror {
      position: absolute;
      top: 71px;
      left: 12px;
      right: 12px;
      bottom: 26px;
      background: url(../assets/bg2.png) no-repeat fixed;
      background-size: cover;
      -webkit-filter: blur(10px);
      filter: blur(10px);
      opacity: .9;
    }
  }

</style>
