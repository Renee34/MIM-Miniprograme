// pages/app/index.js



Page({
  data: {
    activeNames: ['1'],
    
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
    
  },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
  onClickRight() {
    wx.showToast({ title: '点击新建', icon: 'none' });
  },
  
});