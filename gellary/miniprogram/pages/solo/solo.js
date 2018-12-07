const util = require('../../utils/util')
const photoMemo = wx.cloud.database().collection('photoMemories')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoSolo: {},
    showing: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let data = await util.getStorage('photoList')
    let photoData = data.data
    if (photoData) {
      photoData.forEach( (photo) => {
        if (photo._id == options.id) {
          this.setData({ photoSolo: photo })
        }
      })
    }
  },

  toggle: function() {
    let showing_status = this.data.showing
    if (showing_status) {
      this.setData({ showing: false})
    } else {
      this.setData({ showing: true })
    }
  },

  onDelete: function(e) {
    let id = e.currentTarget.dataset.id
    photoMemo.doc(id).remove({
      success: res => {
        wx.redirectTo({
          url: '../photo-river/photo-river',
          success: res => {
            wx.startPullDownRefresh()
          }
        })
      },
      fail: err => console.error(err)
    })
  },

  

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})