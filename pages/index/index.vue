<template>
	
	<!-- 导航栏 -->
	<customTabBar Title="趣学非遗"></customTabBar>
	
	<!-- 背景图 -->
	<image class="bg" src='../../static/background-img.png'></image>
	
	<!-- 标题 -->
	<view class="title">
	  <text>城市非遗</text>
	</view>
	
	<!-- 轮播图 -->
	<view class="swiper">
	  <swiper interval="2000" indicator-dots  circular="true" indicator-color="#fff" indicator-active-color="#5DADE2">
	    <swiper-item>
	      <view class="TT">
	        <view class="T1">
	          <text>南宁 -></text>
	        </view>
	        <view class="T2">
	          <navigator url="">南宁某城</navigator>
	          <navigator url="">中国绿城</navigator>
	        </view>
	        <view class="T3">
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	        </view>
	      </view>
	    </swiper-item>
	    <swiper-item>
	      <view class="TT">
	        <view class="T1">
	          <text>南宁 -></text>
	        </view>
	        <view class="T2">
	          <navigator url="">南宁某城</navigator>
	          <navigator url="">中国绿城</navigator>
	        </view>
	        <view class="T3">
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	        </view>
	      </view>
	    </swiper-item>
	    <swiper-item>
	      <view class="TT">
	        <view class="T1">
	          <text>南宁 -></text>
	        </view>
	        <view class="T2">
	          <navigator url="">南宁某城</navigator>
	          <navigator url="">中国绿城</navigator>
	        </view>
	        <view class="T3">
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	        </view>
	      </view>
	    </swiper-item>
	    <swiper-item>
	      <view class="TT">
	        <view class="T1">
	          <text>南宁 -></text>
	        </view>
	        <view class="T2">
	          <navigator url="">南宁某城</navigator>
	          <navigator url="">中国绿城</navigator>
	        </view>
	        <view class="T3">
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	        </view>
	      </view>
	    </swiper-item>
	    <swiper-item>
	      <view class="TT">
	        <view class="T1">
	          <text>南宁 -></text>
	        </view>
	        <view class="T2">
	          <navigator url="">南宁某城</navigator>
	          <navigator url="">中国绿城</navigator>
	        </view>
	        <view class="T3">
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	          <image src="../../static/c1.png" mode=""/>
	        </view>
	      </view>
	    </swiper-item>
	  </swiper>
	</view>
	
	<!-- 导航栏 -->
	<view class="good-nav">
	  <view>
	    <image src="../../static/页面1/1huanban1.png" mode=""/>
	    <text>传统手艺</text>
	  </view>
	  <view>
	    <image src="../../static/页面1/2hauban2.png" mode=""/>
	    <text>传统音乐</text>
	  </view>
	  <view>
	    <image src="../../static/页面1/3huabna3.png" mode=""/>
	    <text>传统戏剧</text>
	  </view>
	  <view>
	    <image src="../../static/页面1/4huaban4.png" mode=""/>
	    <text>传统美术</text>
	  </view>
	  <view>
	    <image src="../../static/页面1/5huaban5.png" mode=""/>
	    <text>传统技艺</text>
	  </view>
	  <view>
	    <image src="../../static/页面1/6huaban6.png" mode=""/>
	    <text>传统民俗</text>
	  </view>
	</view>
	
	<!-- 二级标题 -->
	<view class="data">
	  <text>非遗故事分享</text>
	</view>
	
	<!-- 内容 -->
	<view class="content">
	  <view>
	    <image src="../../static/IMG_5779.jpg" mode=""/>
	    <text>宾阳炮龙节</text>
	  </view>
	</view>
</template>

<script>
	import customTabBar from "../../components/customTabBar.vue"
	export default {
		components: {
		      customTabBar
		},
	}
</script>

<style lang="scss">
	page {
	  height: 100vh;
	  box-sizing: border-box;
	  display: flex;
	  flex-direction: column;
	  
	> view {
		&:nth-child(n + 2) {
			margin-left: 42rpx;
			margin-right: 42rpx;
			margin-top: 16rpx;
	  	  	}
	  	}
	}
	@font-face {
		font-family: 'MyCustomFont';
		src: url('../static/fonts/SourceHanSerifCN-Light-5.otf') format('opentype');
	}
	.bg {
		position: absolute;
		left: 0;
		bottom: 0;
		display: block;
		width: 100%;
		height: 100%;
		z-index: -999;
	}
	
	.title {
		font-family: 'MyCustomFont';
		font-weight: bold;
	}
	
	
	.swiper {
		swiper {
	    height: 440rpx;
	    background-color: skyblue;
	    swiper-item {
	      background-color: lightsalmon;
	      .TT{
	        height: 380rpx;
	        margin-top: 20rpx;
	        margin-right: 26rpx;
	        background-color: blueviolet;
	        border-radius: 30rpx;
	        overflow: hidden;
	        view {
	          padding: 26rpx 26rpx 0rpx 26rpx;
	        }
	      }
	
	      .T1 {
	        height: 30rpx;
	        margin-bottom: 10rpx;
	        text {
	          font-size: 40rpx;
	          color: #FFF;
			  font-weight: bolder;
			  font-family: 'MyCustomFont';
	        }
	      }
	
	      .T2 {
	        display: flex;
	        flex-direction: row;
	        height: 80rpx;
	        navigator {
				font-size: 18rpx;
				background-color: #FFF;
				width: 90rpx;
				height: 30rpx;
				border-radius: 10px;
				font-weight: bold;
				font-family: 'MyCustomFont';
				margin-top: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
	        }
	      }
	
	      .T3 {
	        display: flex;
	        flex-direction: row;
	        justify-content: space-between;
	        image {
	          width: 160rpx;
	          height: 160rpx;
	          border-radius: 30rpx;
	        }
	      }
	    }
	  }
	}
	
	.good-nav {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 16rpx;
		border-radius: 10rpx;
		view {
		display: flex;
		flex-direction: column;
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 60px;
		}
			text {
				font-size: 20rpx;
				width: 100rpx;
				font-family: 'MyCustomFont';
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	
	.data {
		font-family: 'MyCustomFont';
	}
	
	.content { 
		image {
			width: 100%;
			border-radius: 16px;
		}
		text {
			font-family: 'MyCustomFont';
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
