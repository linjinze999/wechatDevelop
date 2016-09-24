var order = ['blue','purple','orange','red','green'];
Page({
  data: {
    toView: "blue",
    name:'XXX',
    information:{
      position:'前端开发工程师',
      nativePlace:'北京市',
      tellphone:'18888888888',
      eMail:'xxxxxxxx@xx.com'
    },
    experience:{
      practice:[
        {
          startTime:'2016.08 ',
          endTime:' 至今',
          company:'谷歌',
          position:'前端开发工程师',
          description:'假装在谷歌实习'
        }
      ],
      projects:[
        {
          startTime:'2015.05 ',
          endTime:' 2016.05',
          projectName:'我的项目',
          position:'前后端开发工程师',
          description:'项目描述'
        }
      ]
    },
    skills:['html','javascript','css','avalon'],
    communication:'../../resources/images/myWeChat.jpg'
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  scrollToTop: function(e) {
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 667
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
