"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 接收评论数据
      reviewlist: [],
      forunmID: 1
    };
  },
  methods: {
    // 获取评论信息
    openRE() {
      common_vendor.Ws.callFunction({
        name: "CommunicationAllGet",
        data: {
          forunmID: this.forunmID
        }
      }).then((res) => {
        this.reviewlist = res.result.data;
        console.log("评论内容", this.reviewlist);
      });
    }
  },
  onLoad(options) {
    const forunmID = parseInt(options.forunmID);
    this.forunmID = forunmID;
    console.log(`传入的Forum ID 为: ${forunmID}`);
    console.log(typeof this.forunmID);
    this.openRE();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.reviewlist, (item, index, i0) => {
      return {
        a: common_vendor.t(item.username),
        b: common_vendor.t(item.content),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/IT_Study/Uniapp/FLICHAPP/pages/stillmore/CommunicationDetails.vue"]]);
wx.createPage(MiniProgramPage);
