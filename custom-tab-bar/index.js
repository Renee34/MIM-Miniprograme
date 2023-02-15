
Component({
   
  data: {
    active: 'home'
  },
  
  methods: {
    changeActive({ detail }) {
      this.setData({
        active: detail
      }),
      
  
      wx.switchTab({
        url: '/pages/home/index',
      })
        wx.switchTab({
          url: '/pages/app/index',
        })
      wx.switchTab({
          url: '/pages/mine/index',
      })
    }
  }
})
 