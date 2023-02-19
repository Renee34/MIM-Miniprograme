// index.js页面逻辑层
// 获取应用实例
import * as apiUser from '../../api/user'

Page({
  data: {
   
  },
  onLoad() {
    this.run();
  },
  run() {
    wx.setStorageSync('token', "BearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW5mdXpoYW5nQHRvbmdqaS5lZHUuY24iLCJjcmVhdGVkIjoxNjc2NzEzNDUyNjE5LCJleHAiOjE2NzczMTgyNTJ9.hXmiXandHPeOmOXLtjWhD4vuFzGQ5ICgAHJjm7CHf8hEAwcoHPVJ_fEiPnjRidLj5plNnICnpA_wQdownHIfWQ");
  
    apiUser.getUserInfo().then(res => {
      console.log("xxxxxxx", res);
    })
  }
})
  