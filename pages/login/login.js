// pages/login/login.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeImg: "",
    email:"",
    password:"",
    code:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    this.changcode();
   },
      // 表单项内容发生改变的回调
  handleInput(event){
    // let type = event.currentTarget.id;// id传值 取值： phone || password
    let type = event.currentTarget.dataset.type; // data-key=value
    // console.log(event);
    this.setData({
      [type]: event.detail.value
    })
  },
  
  async login(){
    let {email,password,code} = this.data;
    /*
    * 邮箱验证：
    *   1. 内容为空
    *   2. 邮箱格式不正确
    *   3. 邮箱格式正确，验证通过
    * */
    
    if(!email){
      // 提示用户
      wx.showToast({
        title: '邮箱地址不能为空',
        icon: 'none'
      })
      return;
    }
    
    if(!password){
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return;
    }

    if(!code){
      wx.showToast({
        title: '验证码不能为空',
        icon:'none'
      })
      return;
    }

  /**    wx.request({
      url: 'http://47.103.81.223:8748/auth/login'+
      {
        email,
        password,
        code
      },
      method:"POST",
      success:(res) => {
        console.log("denglufanhui",res)
        if(res.data.code === 200){ // 登录成功
          wx.showToast({
            title: '登录成功'
          })}
          else{
            wx.showToast({
              title: 'sss',
            })
          }
   },
   fail(res) {

   }
    })**/
    console.log('ssss', {'email': email,'password': password,'code': code})
    let result = await request('/auth/login', {'email': email,'password': password,'code': code}, "POST")
    console.log("111",result)
    if(result.code === 200){ // 登录成功
      wx.showToast({
        title: '登录成功'
      });
      const {tokenHead, token} = result.data;
      token = tokenHead + token;
      wx.setStorageSync('token', token);
    } else{
        wx.showToast({
          title: 'sss',
        })}
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  changcode(){
    wx.request({
      url: 'http://47.103.81.223:8748/auth/captcha',
      method:"GET",
      responseType:"arraybuffer",
      success:(res) => {
        let cookie = res.header['Set-Cookie'];
        let sessionPos = cookie.indexOf("JSESSIONID=");
        if (sessionPos != -1) {
          wx.setStorageSync('sessionID', cookie);
        }
        console.log("111111",res)
        let picurl = 'data:image/jpg;base64,' + wx.arrayBufferToBase64(res.data)
        this.setData({
             codeImg:picurl
        })
   },
   fail(res) {

   }
    })
  }
})