// components/Gellary.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: 'string',
      value: ''
    },
    rectType: {
      type: 'string',
      value: ''
    },
    mode: {
      type: 'srting',
      value: ''
    },
    where: {
      type: 'string',
      value: ''
    },
    when: {
      type: 'string',
      value: ''
    },
    withWho: {
      type: 'string',
      value: ''
    },
    doWhat: {
      type: 'string',
      value: ''
    },
    shortNote: {
      type: 'string',
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    horizontal: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getImgInfo: function (e) {
      let i_width = e.detail.width
      let i_height = e.detail.height
      if (i_width > i_height) {
        this.setData({
          horizontal: true
        })
      }
    },
  }
})
