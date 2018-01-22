
//获取应用实例
var app = getApp()

Page({
  
  data : {
    var_item : [1,1,1,1],
    disabled: false,
  },

  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },

})
