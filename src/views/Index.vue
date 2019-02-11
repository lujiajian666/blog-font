<template>
  <div class="index">
    <div class="container">
      <h1>最近的20篇文章</h1>
      <ul>
        <router-link tag="li" :to="{name: 'article', params: {id: item.id}}" v-for="(item, index) in tableData" :key="index">
          {{item.createTime}} » {{item.title}}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    get
  } from '../service/axios'
  export default {
    data() {
      return {
        tableData: [],
        pageSize: 10,
        total: 0,
        currentPage: 1
      }
    },
    created() {
      this.listArticle()
    },
    methods: {
      listArticle() {
        get('/article/get', {
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(res => {
          this.tableData = res.data.list;
          this.total = res.data.total;
          this.currentPage = res.data.currentPage;
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .index {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url('../assets/bg.jpg') no-repeat fixed center center;
    justify-content: center;
    align-items: center;

    .container {
      min-width: 70%;
      min-height: 80%;
      padding: 20px;
      color: white;
      background: rgba(0, 0, 0, .5)
    }

    ul {
      text-align: left;

      li {
        padding-left: 20px;
        margin: 10px auto;
        font-size: 18px;
        list-style: none;
        cursor: pointer;
        background: #f5deb382;
        border-radius: 10px;
      }
    }
  }

</style>
