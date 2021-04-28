// pages/song-list/song-list.js
Page({
  data: {
    rankname: '',
    songList: []
  },
  onLoad(options) {
    // console.log(options)
    let rankid = options.rankid
    console.log(rankid)
    // console.log(singerName)
    let _this = this
    wx.request({
      url: `http://m.kugou.com/rank/info/?page=1&json=true&rankid=${rankid}`,
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        console.log(res);
        _this.setData({
          rankname: res.data.info.rankname,
          songList: res.data.songs.list
        });
        console.log(_this.data.songList);
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