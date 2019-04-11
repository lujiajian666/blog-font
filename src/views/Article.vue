<template>
  <div>
    <div class="index" v-if="tableData">
      <p class="tag">
        lulujiang的个人博客
        <span class="tags" v-for="(value, index) in tags" :key="index">
          {{types[value]}}
        </span>
      </p>
      <div class="container">
        <div class="inner">
          <h1>{{tableData.title}}</h1>
          <p class="time">{{tableData.createTime}}</p>
          <div v-html="tableData.text"></div>
        </div>
        <div class="comment-text-area">
          <textarea></textarea>
          <input type="button" value="发表">
        </div>
        <ul class="comment">
          <li>
            <img src="../assets/logo.png">
            <span>lujiajian:</span>
            <span>哈哈哈哈啊哈</span>
          </li>
          <li>
            <img src="../assets/logo.png">
            <span>lujiajian:</span>
            <span>哈哈哈哈啊哈</span>
          </li>
        </ul>
      </div>
    </div>
    <canvas class="background"></canvas>
    <login-component :signUp="signUp" :signIn="signIn"></login-component>
  </div>
</template>

<script>
  import {
    get
  } from '../service/axios';
  import Particles from 'particlesjs';
  import loginComponent from '../components/login/index';
  export default {
    data() {
      return {
        tableData: null,
        types: null
      }
    },
    created() {
      get('/article/get', {
        id: this.$route.params.id
      }).then(res => {
        this.tableData = res.data;
      }).then(_ => {
        return get('/article/type/get', {
          currentPage: 1,
          pageSize: 100
        });
      }).then(_ => {
        this.types = _.data.list.reduce((total, item) => {
          total[item.id] = item.name;
          return total;
        }, {});
      }).catch(e => {
        console.log(e)
      })
    },
    mounted() {
      // 粒子图背景
      // Particles.init({
      //   selector: '.background',
      //   sizeVariations: 1,
      //   color: '#65f7cd',
      //   maxParticles: 1000,
      //   speed: .1
      // });
    },
    computed: {
      tags() {
        if (this.types) {
          return this.tableData.types.split(';').filter(item => !!item);
        }
      }
    },
    components: {
      loginComponent
    },
    methods: {
    }
  }

</script>

<style lang="less" scoped>
  .index {
    padding: 40px;
    text-align: left;
    font-weight: bold;
    background: url('../assets/bg2.png') no-repeat fixed;
    background-size: cover;

    .tag {
      margin-bottom: 10px;
      padding: 10px 15px;
      line-height: 40px;
      color: orange;
      background-color: white;

      .tags {
        padding: 2px 10px;
        color: white;
        font-size: 12px;
        background: #91bef0;
        border-radius: 5px;
        vertical-align: text-bottom;
      }
    }

    .container {
      position: relative;
      z-index: 1;
      padding: 10px 15px;
      background: rgba(255, 255, 255, .8);

      .time {
        margin-bottom: 40px;
        color: #78a5f1;
        font-size: 12px;
      }

      .inner {
        color: rgba(0, 0, 0, .6);
        box-sizing: border-box;
      }

      .comment-text-area {
        margin: 50px auto 20px auto;
        textarea {
          width: 100%;
          height: 150px;
          padding: 10px 15px;
          font-size: 16px;
          border: none;
          outline: none;
          resize: none;
          box-sizing: border-box;
          border-radius: 5px;
        }
        input {
          height: 30px;
          width: 100px; 
          color: white;
          background-color: coral;
          border: none;
          outline: none;
          border-radius: 5px;
        }
      }

      .comment {
        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          vertical-align: middle;
        }

        li {
          line-height: 40px;
          list-style: none;
          vertical-align: middle;
        }

        li:not(:last-of-type) {
          border-bottom: 1px dashed rgba(0, 0, 0, .3);
        }
      }
    }
  }

  .background {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    z-index: 1;
  }

</style>
