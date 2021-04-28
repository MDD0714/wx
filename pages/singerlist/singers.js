// pages/singerlist/singers.js
Page({
  data: {
    singerlist: []
  },
  onLoad(options) {
    console.log(options)
    let classid = options.classid
    console.log(options)
    let _this = this
    wx.request({
      url: `http://m.kugou.com/singer/list/${classid}?json=true`,
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        // console.log(res);
        _this.setData({
          singerlist: res.data.singers.list.info
        });
        console.log(_this.data.singerlist);
      }
    });
  },
  getSong(event) {
    // console.log(event)
    let _this = this;
    let singername = event.currentTarget.dataset.singername;
    wx.navigateTo({
      url: '../singer-song/song?singername=' + singername
    })
  }
})