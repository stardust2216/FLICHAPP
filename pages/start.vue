<template>
  <view class="bgc">
	  <view class="bgc-circle">
		  <image src="../static/首页/circle.png" mode="" style="width: 770rpx;height: 870rpx;"></image>
	  </view>
    <view class="icon-container">
	
      <!-- 遍历一个包含图标信息的数组来动态生成图标和文字 -->
      <view 
        v-for="(icon, index) in icons" 
        :key="index" 
        class="imgIcon" 
        :style="getIconStyle(index)"
        @click="switchToTabPage(icon.pagePath)"
      >
		<view :class="{ 'circle': index !== 2, 'feiyi-circle': index === 2 }">
					<image class="icon" :class="{ 'feiyi-icon': index === 2 }" :src="icon.src" />
				</view>
        
        <text class="icon-label">{{ icon.label }}</text>
      </view>
	  
    </view>
	<view class="bottom">
		<image src="../static/首页/feiYi.png" style="width: 80rpx;height: 80rpx;"></image>
		<text class="bottom-text">让非遗文化触手可及</text>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 图标数据，包含图标路径、文字和对应跳转页面的路径
      icons: [
        { src: '../static/首页/keCheng.png', label: '趣学课程', pagePath: 'Consult/Consult' },
        { src: '../static/首页/zixun.png', label: '趣学资讯', pagePath: 'Lesson/Lesson' },
        { src: '../static/首页/feiYi.png', label: '趣学非遗', pagePath: 'index/index' },
        { src: '../static/首页/tiYan.png', label: '趣学体验', pagePath: 'experience/experience' },
        { src: '../static/首页/gengDuo.png', label: '趣学更多', pagePath: 'stillmore/stillmore' }
      ]
    };
  },
  methods: {
    // 动态获取每个图标的位置样式
    getIconStyle(index) {
      const positions = [
        { top: '220rpx', right: '240rpx' },
        { top: '480rpx', left: '50rpx' },
        { top: '450rpx', right: '230rpx' },
        { top: '540rpx', right: '10rpx' },
        { top: '790rpx', left: '200rpx'}
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
	background-image: linear-gradient(to bottom, #ADB1A2, #c8bd9a, #e1c38b);
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
.circle {
  width: 70px; /* 圆圈的宽度 */
  height: 65px; /* 圆圈的高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  /* box-shadow: 0px 0px 20px rgba(111, 111, 111, 0.5); */
  border-radius: 50%; /* 将容器变成圆形 */
  margin-bottom: 5px; /* 图标和文字间的间距 */
}
.icon {
  width: 50px; /* 图标宽度，根据实际调整 */
  height: 45px; /* 图标高度，根据实际调整 */
  margin-bottom: 5px; /* 图标和文字间的间距 */
  /* background-color: white; */
  border-radius: 50%;
  
}
.feiyi-icon {
    /* 你的特定样式 */
    width: 250rpx;
    height: 240rpx;
	background-color: transparent;
	
  }
.feiyi-circle {
  background-color: transparent; /* 使背景透明 */
}
@font-face {
  font-family: 'MyCustomFont';  /* 自定义字体的名称 */
  src: url('./fonts/XiangJiaoDaJiangJunLingGanTi-2.ttf') format('truetype'),
       url('./fonts/XiangJiaoDaJiangJunLingGanTi-2.woff') format('woff'),
       url('./fonts/XiangJiaoDaJiangJunLingGanTi-2.woff2') format('woff2');
}

.icon-label {
  font-size: 16px; 
  color: #333;
  line-height: 40px; 
  font-weight: bold;
}
.bottom{
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.bottom-text {
	line-height: 40px;
	font-weight: bold;
	margin-top:10rpx ;
	font-size: 16px;
	color: white;
}
.bgc-circle{
	margin-top: 150rpx;
}
</style>
