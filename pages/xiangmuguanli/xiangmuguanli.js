// pages/xiangmuguanli/xiangmuguanli.js
Page({
  data: {
    activeNames: ['1'],
  },

  toketijingfei() {
    wx.navigateTo({
      url: '/pages/ketijingfei/ketijingfei',

    })
  },
  tojingfei() {
    wx.navigateTo({
      url: '/pages/jingfei/jingfei',

    })
  },
  toshiji() {
    wx.navigateTo({
      url: '/pages/shiji/shiji',

    })
  },
  tochengguo() {
    wx.navigateTo({
      url: '/pages/chengguo/chengguo',

    })
  },
  totuandui() {
    wx.navigateTo({
      url: '/pages/tuandui/tuandui',

    })
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },


});
