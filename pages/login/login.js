// pages/login/login.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        transValues: ''
    },
    //值去空
    transValue: function(e) {
        let value = e.detail.value;
        let reg = /(^\s+) | (\s+$)/g;
        value = value.replace(reg, '');
        this.data.transValues = value;
    },
    //验证手机号
    verificationPhone: function() {
        let value = this.data.transValues;
        if (!value) {
            wx.showToast({
                title: '手机号不能为空',
                icon: 'none',
                duration: 1000
            });
            return false;
        } else {
            let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if (!reg.test(value)) {
                wx.showToast({
                    title: '手机号格式错误',
                    icon: 'none',
                    duration: 1000
                });
                return false;
            }
        }
        return true;
    },
    //表单提交
    formSubmit: function(e) {
        let isVerification = this.verificationPhone();
        let params = e.detail.value;
        let userName = this.data.transValues;
        if (!isVerification) {
            return false;
        }
        if (!params.code) {
            wx.showToast({
                title: '验证码不能为空',
                icon: 'none',
                duration: 1000
            });
            return false;
        }
        if (isVerification && params.code) {
            wx.request({
                url: 'https://localhost:3001/login',
                dataType: 'json',
                data: params,
                method:'POST',
                success: function(result) {
                    if(result.data){
                        try {
                            wx.setStorageSync('isLogin', result.data)
                            wx.switchTab({
                                url: '/pages/person/person'
                            })
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
            })
           
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {
        
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