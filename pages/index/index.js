// index.js
// 获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    bannerUrl: [],
    musicList: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  onLoad() {
    let _this = this;
    wx.request({
      url: 'http://m.kugou.com/?json=true',
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        // console.log(res);
        _this.setData({
          bannerUrl: res.data.banner,
          musicList: res.data.data
        });
        console.log(_this.data.musicList)
      }
    })
    
  }
})