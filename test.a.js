var axios = require('axios');
axios({
  url: 'http://www.baidu.com',
  params: {
    name: '哈'
  }
}).then(ret => {
  for(let i in ret) {
    console.log(i)
  }
  console.log(ret.request)
})
