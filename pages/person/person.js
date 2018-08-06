// pages/person/person.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLogin: false
    },
    isLoginBtn: function() {
        if (!this.data.isLogin){
            wx.showModal({
                content: '以下功能需要登录后才能体验',
                cancelText:'再看看',
                cancelColor:'#FF518C',
                confirmText:'去登录',
                confirmColor:'#FF518C',
                success: function (res) {
                    if (res.confirm) {
                        wx.navigateTo({
                            url: '/pages/login/login'
                        })
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            });
        }
    },
    walletBtn:function(){
        wx.navigateTo({
            url: '/pages/wallet/wallet'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
       
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        wx.getStorage({
            key: 'isLogin',
            success: (res) => {
                this.setData({
                    isLogin: res.data
                });
            }
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})