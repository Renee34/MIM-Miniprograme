// pages/mine/index.js
import request from '../../utils/request'
Page({

  data: {
    nick_name:"请登录",
    photo_url:"/assets/image/head.jpg",

  },

  onLoad() {

  },

  tologs(){
      wx.navigateTo({ 
        url: '/pages/login/login', 
      }) 
  },

  onShow: async function (options) {
    let userInfo = await request("/user/info", {}, "GET");
    console.log(userInfo)
    if(userInfo.code ===200){
      this.setData({
          nick_name: userInfo.data.nick_name,
          photo_url: userInfo.data.photo_url
        })

    }
  },
    async userInfo() {
      /**let userInfo = await request("/user/info", {}, "GET");
      console.log(userInfo)
      if(userInfo.code ===200){
        this.setData({
          nick_name: userInfo.data.nick_name,
          photo_url: userInfo.data.photo_url
        })**/
      let team = await("/user/team-member-teams",{},"GET");
      console.log(team)
 //       let nick_name = userInfo.data.nick_name
  //      let photo_url = userInfo.data.photo_url
    //    console.log("ddd",nick_name)
      //  console.log("sdss",photo_url)
      },
    
})