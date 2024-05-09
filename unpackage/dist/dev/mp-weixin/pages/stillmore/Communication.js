"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 接收评论数据
      reviewlist: [],
      // 接收论坛数据
      forumlist: [],
      // 页数
      skip: 0,
      // 论坛ID
      forunmID: 1
    };
  },
  methods: {
    // 获取论坛内容
    openOW() {
      common_vendor.Ws.callFunction({
        name: "CommunicationOWGet",
        data: {
          skip: this.skip
        }
      }).then((res) => {
        this.forumlist = res.result.data;
        console.log("论坛内容", this.forumlist);
      });
    },
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
    },
    // 读取论坛ID
    openReview(e) {
      console.log(e);
    }
  },
  onLoad() {
    this.openOW();
    this.openRE();
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_P = common_vendor.resolveComponent("P");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_icons2 + _component_P + _easycom_uni_fab2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.forumlist, (item, index, i0) => {
      return {
        a: item.head,
        b: common_vendor.t(item.username),
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.content),
        e: "7d802c83-0-" + i0,
        f: "7d802c83-1-" + i0,
        g: common_vendor.o(($event) => $options.openReview(item.forunmID), index),
        h: index
      };
    }),
    b: common_vendor.p({
      type: "chatbubble",
      size: "30"
    }),
    c: common_vendor.f($data.reviewlist, (item, index, i0) => {
      return {
        a: common_vendor.t(item.username),
        b: common_vendor.t(item.content),
        c: index
      };
    }),
    d: common_vendor.sr("fab", "7d802c83-2")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/IT_Study/Uniapp/FLICHAPP/pages/stillmore/Communication.vue"]]);
wx.createPage(MiniProgramPage);
