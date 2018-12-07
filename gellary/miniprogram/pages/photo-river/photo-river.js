const photoMemo = wx.cloud.database().collection('photoMemories')
const util = require('../../utils/util')

Page({
  data: {
    photoMemoList: {}
  },

  onLoad: async function (options) {
    // let photoData = await util.getStorage('photoList')
    // if (photoData) {
    //   this.setData({ photoMemoList: photoData.data })
    // }
    // console.log(photoData)
    photoMemo.where({_openid: 'oiRaA4v2fiHkV8mMNoBF-d_OVK1g'}).orderBy('created_at', 'desc').get()
    .then( (res) => {
      this.setData({ photoMemoList: res.data })
      wx.setStorage({
        key: 'photoList',
        data: res.data,
      })
    })
    .catch( (err) => { console.log(err) })
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.startPullDownRefresh({
    //   success: res => console.log('刷新')
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // wx.startPullDownRefresh({
    //   success: res => console.log('刷新2')
    // })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
 // let photoData = res.data
      // let photoUrlPrefix = 'https://gellary-1256857292.cos.ap-chengdu.myqcloud.com'
      // let photoList = []

      // for (let i = 0; i < photoData.length; i++) {
      //   let photoUrl = photoUrlPrefix + photoData[i].url
      //   photoData[i].url = photoUrl
      //   photoList.push(photoData[i])
      // }
  }
})