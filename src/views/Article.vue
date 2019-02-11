<template>
  <div class="index" v-if="tableData">
    <h1>{{tableData.title}}</h1>
    <div v-html="tableData.text"></div>
  </div>
</template>

<script>
import { get } from '../service/axios'
  export default {
    data () {
      return {
        tableData: null
      }
    },
    created () {
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
     ul {
       text-align: center;
       li {
         font-size: 18px;
         list-style: none;
         cursor: pointer;
       }
     }
   }
</style>
