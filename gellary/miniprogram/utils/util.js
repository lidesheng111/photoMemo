const app = getApp()

var getStorage = (key) => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: key,
      success: resolve,
    })
  })
}

module.exports = {
  getStorage
}