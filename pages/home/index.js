// pages/hpme/index.js
Page({
  data: {
    activeNames: ['1'],
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  tologs(){ 
    wx.navigateTo({ 
      url: '/pages/login/login', 
    }) 
  },

  todata(){
    wx.navigateTo({
      url: '/pages/app/index',
    })
  },
});
