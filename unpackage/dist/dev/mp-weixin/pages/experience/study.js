"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 假设这是从某个API获取的非遗数据
      heritageData: [
        {
          title: "宾阳炮龙节",
          location: "南宁·宾阳",
          imageUrl: "/static/uni.png"
        },
        {
          title: "宾阳炮龙节",
          location: "南宁·宾阳",
          imageUrl: "/static/uni.png"
        },
        {
          title: "宾阳炮龙节",
          location: "南宁·宾阳",
          imageUrl: "/static/uni.png"
        }
      ],
      heritagelist: []
    };
  },
  methods: {},
  onLoad() {
    common_vendor.Ws.callFunction({
      name: "ExStudyGet"
    }).then((res) => {
      this.heritagelist = res.result.data;
      console.log(this.heritagelist);
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.heritagelist, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.tag),
        d: common_vendor.t(item.address),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/IT_Study/Uniapp/FLICHAPP/pages/experience/study.vue"]]);
wx.createPage(MiniProgramPage);
