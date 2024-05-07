"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      head: {
        username: "请叫我刘三姐",
        avatar: "/static/页面4/sanjie_.png",
        title: "先去桂林还是阳朔?让三姐带你攻略桂林最美旅途风光!",
        text: "桂林最值得看的就是象鼻山~但现在的象鼻山都是旅行团,嘈杂非常步道两侧都是低劣小商品,实在扫兴桂林作为一个老牌旅游城市,景点管理太差了除了象鼻山,桂林的滨江路和解放桥还可以走走其他就没啥好看的了大家想看象鼻山的话看我的图就行,没必要专门跑到桂林去看,当然这只是我的看法,大家看有啥更好的推荐敬请评论区下方留言~"
      },
      comment: [
        {
          username: "阿牛哥",
          avatar: "/static/页面4/aniuguo_.png",
          text: "象鼻山是在阳朔还是桂林？"
        },
        {
          username: "爱旅游的小趴菜儿",
          avatar: "/static/页面4/lanyangyang.png",
          text: "姐妹，我想问一下，遇龙河也是在兴坪古镇附近么？还是在阳朔县？我现在在桂林不知道是坐车到阳朔站还是兴坪古镇？"
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.head.avatar,
    b: common_vendor.t($data.head.username),
    c: common_vendor.t($data.head.title),
    d: common_vendor.t($data.head.text),
    e: common_vendor.f($data.comment, (item, index, i0) => {
      return {
        a: item.avatar,
        b: common_vendor.t(item.username),
        c: common_vendor.t(item.text),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/FLICHAPP/pages/stillmore/Communication.vue"]]);
wx.createPage(MiniProgramPage);
