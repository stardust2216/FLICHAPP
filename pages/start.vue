<template>
  <view class="bgc">
    <view class="icon-container">
      <!-- 遍历一个包含图标信息的数组来动态生成图标和文字 -->
      <view 
        v-for="(icon, index) in icons" 
        :key="index" 
        class="imgIcon" 
        :style="getIconStyle(index)"
        @click="switchToTabPage(icon.pagePath)"
      >
        <image class="icon" :src="icon.src" />
        <text class="icon-label">{{ icon.label }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 图标数据，包含图标路径、文字和对应跳转页面的路径
      icons: [
        { src: '../static/c1.png', label: '趣学资讯', pagePath: 'consult/consult' },
        { src: '../static/c2.png', label: '趣学课程', pagePath: 'pages/lesson/lesson' },
        { src: '../static/c5.png', label: '趣学非遗', pagePath: 'pages/index/index' },
        { src: '../static/c3.png', label: '趣学体验', pagePath: 'pages/experience/experience' },
        { src: '../static/c4.png', label: '趣学更多', pagePath: 'pages/stillnore/stillnore' }
      ]
    };
  },
  methods: {
    // 动态获取每个图标的位置样式
    getIconStyle(index) {
      const positions = [
        { top: '100rpx', right: '180rpx' },
        { top: '260rpx', left: '80rpx' },
        { top: '320rpx', right: '280rpx' },
        { top: '370rpx', right: '40rpx' },
        { top: '580rpx' }
      ];
      return positions[index] || {};
    },
    // 页面跳转方法
    switchToTabPage(pagePath) {
      uni.switchTab({
        url: pagePath
      });
    }
  }
};
</script>

<!-- 样式部分保持不变 -->

<style scoped>
.bgc{
	background-color: lemonchiffon;
	height: 100%;
	width: 100%;
	position: absolute;
}
.icon-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px; /* 根据需要调整内边距 */
}

.imgIcon {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  text-align: center;
}

.icon {
  width: 60px; /* 图标宽度，根据实际调整 */
  height: 60px; /* 图标高度，根据实际调整 */
  margin-bottom: 10px; /* 图标和文字间的间距 */
  background-color: white;
  border-radius: 50%;
}

.icon-label {
  font-size: 16px ; 
  color: #333;
  line-height: 50px; 
}
</style>
