// pages/mine/index.js
import request from '../../utils/request'
Page({

  data: {
  },
    onLoad() {
      this.getTabBar().setData({
        active: 'mine'
      })
    },
    tologs(){ 
      wx.navigateTo({ 
        url: '/pages/login/login', 
      }) 
    },
    async userInfo() {
      let userInfo = await request("/user/info", {}, "GET");
      console.log(userInfo)
      console.log("asdasdasdasdas")
    }
})