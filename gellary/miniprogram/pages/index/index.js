const db = wx.cloud.database()
const user = db.collection('userInfo')
const app = getApp()

Page({
  data: {
    logged: false,
    opened: false,
  },

  onTapLogin: function(event) {
    let userInfo = event.detail.userInfo
    console.log(this)
    this.setData({
      userInfo: userInfo,
      logged: true
    })
    // user.add({
    //   data: userInfo,
    // }).then( res => {
    //   console.log(res)
    // }).then( e => {
    //   console.log(e)
    // })
  },

  toMe: () => {
    wx.navigateTo({
      url: '../../pages/me/me',
    })
  },
  toAdd: () => {
    wx.navigateTo({
      url: '../../pages/add/add',
    })
  },
  toPhotoRiver: () => {
    wx.navigateTo({
      url: '../../pages/photo-river/photo-river',
    })
  },
  toSpecials: () => {
    wx.navigateTo({
      url: '../../pages/specials/specials',
    })
  },

  onLoad: function() {
    // user.get().then( res => {
    //   console.log(res)
    // })
  },

  toggle: function () {
    var list_opened = this.data.opened

    if (list_opened) {
      this.setData({
        opened: false
      });
    } else {
      this.setData({
        opened: true
      });
    }
  },
})
