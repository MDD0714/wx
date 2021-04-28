// pages/song-details/details.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: '',
    name: '',
    author: '',
    src: '',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  onLoad(options) {
    let hash = options.hash
    console.log(hash)
    let _this = this
    wx.request({
      url: `http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}`,
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        console.log(res);
        _this.setData({
          name: res.data.songName,
          author: res.data.author_name,
          src: res.data.url,
          poster: res.data.imgUrl
        });
        console.log(_this.data);
      }
    });
  },
  aaa() {
    if(this.data.src === "") {
      wx.showToast({
        title: '需要付费',
        icon: 'error',
        duration: 2000
      })
    }
  }
})