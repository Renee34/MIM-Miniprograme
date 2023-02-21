// pages/tuandui/tuandui.js
Page({
  data: {
    activeKey: 0,

  },
  toxinjian() {
    wx.navigateTo({
      url: '/pages/xinjian/xinjian',

    })
  },
  toxingqing() {
    wx.navigateTo({
      url: '/pages/xingqing/xingqing',

    })
  },
  
});
