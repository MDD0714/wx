// pages/singer-category/category.js
Page({
  data: {
    rankList: []
  },
  onLoad() {
    let _this = this;
    wx.request({
      url: 'http://m.kugou.com/rank/list&json=true',
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        // console.log(res);
        _this.setData({
          rankList: res.data.rank.list
        });
        console.log(_this.data.rankList);
      }
    })
  },
  getSongList(event) {
    let rankid = event.currentTarget.dataset.rankid;
    wx.navigateTo({
      url: '../song-list/song-list?rankid=' + rankid,
    })
  }
})