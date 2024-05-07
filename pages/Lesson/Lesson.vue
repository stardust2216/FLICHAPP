<template>
	<!-- 导航栏 -->
	<customTabBar Title="趣学课程"></customTabBar>
	
	<!-- 背景图 -->
	<image class="bg" src='../../static/background-img.png'></image>
	
	<view class="top">
		<view class="top-image">
			<view class="top-text">
				<text class="top-title">非遗文化体验</text>
				<text class="top-english">Intangible Cultural Heritage Experience</text>
			</view>
		</view>
		<view class="top-mask">
		</view>
	</view>
	
	<!-- 二级标题 -->
	<view class="good-title">
	  <text>在线课程</text>
	</view>
		
	<!-- 课程导航 -->
	<view class="good-nav">
		<view class="good-kc">
			<view class="good-text">
				<text class="good-text-A">纯植物颜料扎染学习</text><br>
				<view class="good-text-B"></view><br>
				<text class="good-text-C">植物扎染</text>
			</view>
			<view class="bg-image"></view>
		</view>
		<view class="good-kc">
			<view class="good-text">
				<text class="good-text-A">大师竹编制作学习</text><br>
				<view class="good-text-B"></view><br>
				<text class="good-text-C">灵山竹编</text>
			</view>
			<view class="bg-image"></view>
		</view>
		<view class="good-kc">
			<view class="good-text">
				<text class="good-text-A">凉棕制作学习</text><br>
				<view class="good-text-B"></view><br>
				<text class="good-text-C">凉棕制作</text>
			</view>
			<view class="bg-image"></view>
		</view>
		<view class="good-kc">
			<view class="good-text">
				<text class="good-text-A">马蜂酒制作学习</text><br>
				<view class="good-text-B"></view><br>
				<text class="good-text-C">苗族蜡染</text>
			</view>
			<view class="bg-image"></view>
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
	
	.bg {
		position: absolute;
		left: 0;
		bottom: 0;
		display: block;
		width: 100%;
		height: 100%;
		z-index: -999;
	}
	
	
	.top {
		position: relative;
		.top-image {
			width: 100%;
			height: 340rpx;
			position: absolute;
			background-image: linear-gradient(180deg, transparent, transparent, rgba(191, 227, 227, 50)),
			url("https://www.freeimg.cn/i/2024/05/02/6633985c63bb3.jpg");
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 16rpx;
			
			.top-text {
				margin-top: 330rpx;
				margin-left: 40rpx;
				display: flex;
				flex-direction: column;
				.top-title {
					font-weight: bold;
					font-size: 60rpx;
				}
				.top-english {
					font-weight: bold;
					font-size: 20rpx;
				}
			}
			
		}
		
		.top-mask {
			margin-top: 10rpx;
			height: 440rpx;
			background-color: rgba(191, 227, 227, 50);
			border-radius: 16px;
			
			text {
				z-index: 1;
			}
		}
	}
	.good-title {
		padding-top: 70rpx;
		text {
			font-weight: bold;
			font-size: 32rpx;
		}
	}
	
	.good-nav {
		height: 650rpx;
		margin-top: 60rpx !important;
		display: flex;
		justify-content: space-between;
		.good-kc {
			height: 450rpx;
			width: 140rpx;
			border-bottom-left-radius: 80rpx;
			border-bottom-right-radius: 80rpx;
			overflow: hidden;
			position: relative;
			.good-text {
				z-index: 1;
				writing-mode: vertical-rl;
				text-orientation: mixed;
				float: right;
				padding: 10rpx;
				.good-text-A {
					font-size: 20rpx;
					letter-spacing: 12rpx;
					color: #ba8836;
				}
				.good-text-B {
					height: 140rpx;
					margin-left: 4rpx;
					margin-right: 4rpx;
					border-right: 2px solid #ba8836;
				}
				.good-text-C {
					font-weight: bold;
					letter-spacing: 12rpx;
					color: #ba8836;
				}
			}
			
			.bg-image {
				z-index: -1;
				position: absolute;
				top: 65rpx;
				height: 100%;
				width: 100%;
				background: linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.5), rgba(255,255,255,0.2), rgba(0,0,0,0)),
				url("../../static/image.png");
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
			}
			
			&:nth-child(2) {
				margin-top: 200rpx;
			}
			
			&:nth-child(4) {
				margin-top: 200rpx;
			}
		}
	}
</style>
