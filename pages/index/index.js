//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        defaultColor: '#fff',
        activeColor: '#417dc9',
        circular: true,
        adArray: [{
                id: 1,
                url: '/iconFront/topic.jpg',
                text: '小方优选'
            },
            {
                id: 2,
                url: '/iconFront/technology.jpg',
                text: '科技动态'
            },
            {
                id: 3,
                url: '/iconFront/conference.jpg',
                text: '基金会议'
            },
            {
                id: 4,
                url: '/iconFront/periodical.jpg',
                text: '最新期刊'
            },
        ],
        currentTab: 0
    },

    bindChange: function(e) {
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });
    },
    swichNav: function(e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    }
})