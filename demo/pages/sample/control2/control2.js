
//获取应用实例
var app = getApp()

Page({
  
  data : {
    items : [
      {checked:true, name:"t1", value: "选项1"},
      {checked:true, name:"t2", value: "选项2"},
      {checked:true, name:"t3", value: "选项3"},
      {checked:true, name:"t4", value: "选项4"}
    ],
    disabled: false,
  },

  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },

})
