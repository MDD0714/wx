// pages/singer-category/category.js
Page({
  data: {
    catelist: [],
    singerlist: []
  },
  onLoad() {
    let _this = this;
    wx.request({
      url: 'http://m.kugou.com/singer/class&json=true',
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        // console.log(res);
        _this.setData({
          catelist: res.data.list
        });
        console.log(_this.data.catelist);
      }
    })
  },
  getSinger(event) {
    // console.log(event)
    let _this = this;
    let classid = event.currentTarget.dataset.classid;
    // console.log(classid)
    wx.navigateTo({
      url: '../singerlist/singers?classid=' + classid
    })
  }
})