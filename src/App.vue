<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// 自定义富文本样式
  .ql-syntax {
    background: black;
    border-radius: 5px;
    padding: 5px;
  }
  blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }
  .ql-align-center {
    text-align: center;
  }
</style>
