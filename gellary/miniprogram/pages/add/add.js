const photoMemo= wx.cloud.database().collection('photoMemories')
const _ = wx.cloud.database().command

const util = require('../../utils/util.js')

Page({
  data: {
    memoAdd:{
      url: '',
      horizontal: false,
      where: '',
      when: '',
      withWho: '',
      doWhat: '',
      shortNote: '',
      created_at: null
    },
    warn: ''
  },

  onUpload: async function() {
    // 选取图片
    const tempFilePaths = await new Promise( (resolve, reject) => {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          if (res.tempFilePaths){
            resolve(res.tempFilePaths)
          }
        },
        fail: reject
      })
    })
  
    // 随机字符串
    var fileName = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 9; i++) {
      fileName += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    // 上传到云
    const file = await new Promise( (resolve, reject) => {
      console.log(fileName, 'fn')
      wx.cloud.uploadFile({
        cloudPath: `test/${fileName}.jpeg`,
        filePath: tempFilePaths[0],
        success: resolve,
        fail: reject
      })
    })

    this.setData({
      memoAdd: { url: file.fileID }
    })
  },
  
  // 判断图片宽高比
  onGetInfo: function(e) {
    let imgHeight = e.detail.height
    let imgWidth = e.detail.width
    if (imgHeight < imgWidth) {
      this.data.memoAdd.horizontal = true
    }
  },

  onEmpty: function (e) {
    var _this = this
    if (e.detail.value.length == 0) {
      this.setData({
        warn: '记忆不能空白，请酝酿酝酿感情好好写'
      })

    } else {
      this.setData({ warn: '' })
    }
  },

  onWhere: function(e) {
    this.onEmpty(e)
    this.data.memoAdd.where = e.detail.value
  },
  onWhen: function (e) {
    this.onEmpty(e)
    this.data.memoAdd.when = e.detail.value
  },
  onWithWho: function (e) {
    this.onEmpty(e)
    this.data.memoAdd.withWho = e.detail.value
  },
  onDoWhat: function (e) {
    this.onEmpty(e)
    this.data.memoAdd.doWhat = e.detail.value
  },
  onNote: function (e) {
    this.onEmpty(e)
    this.data.memoAdd.shortNote = e.detail.value
  },

  formSubmit: function(e) {
    console.log(e, 'memo')
    let inputted = e.detail.value
    for (let i in inputted) {
      if (inputted[i].length == 0) {
        this.setData({ warn: '记忆不留白，请酝酿酝酿感情好好写' })
        return
      }
    }

    let finalData = this.data.memoAdd
    finalData.created_at = new Date()
    photoMemo.add({
      data: finalData
    }).then( (res) => {
      console.log(res)
      wx.redirectTo({
        url: '../../pages/photo-river/photo-river',
      })
    }).catch(err => console.error(err))
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.cloud.callFunction({
    //   name: 'deletePhotoMemo',
    //   data: {
    //     id: 'cloud://test1009.7465-test1009/photoMemo/test3.svg'
    //   },
    //   complete: res => {
    //     console.log(res)
    //   }
    // })
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
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
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

  }
})