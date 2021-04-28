// pages/search/search.js
Page({
  data: {
    searchList: []
  },
  onLoad() {
    
  },
  searchSong(event) {
    console.log(event.detail)
    let str = event.detail.value;
    let _this = this
    wx.request({
      url: 'http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword=' + str,
      header: {
        'content-type': 'json'
      },
      success(res) {
        console.log(res);
        _this.setData({
          searchList: res.data.data.info
        });
        console.log(_this.data.searchList)
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