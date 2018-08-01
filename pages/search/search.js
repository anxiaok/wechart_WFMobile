// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hotList:[
          { id: 1, text: '中国高新技术产业',isHot:true},
          { id: 2, text: '正则量子理论', isHot: false},
          { id: 3, text: '热能', isHot: true },
          { id: 4, text: '非单调特征', isHot: false},
          { id: 5, text: '医疗单位图书馆', isHot: true},
          { id: 6, text: '亲和色谱法', isHot: false },
          { id: 7, text: '方便膜结构', isHot: false},
          { id: 8, text: '神经活动模型', isHot: false },
          { id: 9, text: '中草药饲料', isHot: false },
          { id: 10, text: '还原酶基因C677T', isHot: false}
      ],
      historyList: [
          { id: 1, text: '中国高新技术产业'},
          { id: 2, text: '正则量子理论'},
          { id: 3, text: '热能'},
          { id: 4, text: '非单调特征'}
      ],
      isShow:true
  },
    closeCurrentList:function(e){
        let dataset = e.target.dataset;
        let index = dataset.index;
        this.data.historyList.splice(index,1);
        this.setData({
            historyList: this.data.historyList
        });
        let length = this.data.historyList.length;
        !length && this.setData({isShow: false});
    },
    clearList:function(){
        wx.showModal({
            content: '确定清空检索历史',
            success:(res) => {
                if (res.confirm) {
                    this.setData({ isShow: false });
                }
            }
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})