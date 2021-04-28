// pages/singer-song/song.js
Page({
  data: {
    songlist: [],
    singername: ''
  },
  onLoad(options) {
    // console.log(options)
    let singername = options.singername
    // console.log(singerName)
    let _this = this
    wx.request({
      url: `http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword=${singername}`,
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        // console.log(res);
        _this.setData({
          songlist: res.data.data.info,
          singername: singername
        });
        console.log(_this.data.songlist);
      }
    });
  },
  playMusic(event) {
    let hash = event.currentTarget.dataset.hash
    console.log(hash)
    wx.navigateTo({
      url: '../song-details/details?hash=' + hash,
    })
  }
})