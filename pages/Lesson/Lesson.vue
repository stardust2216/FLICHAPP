<template>
	<!-- 导航栏 -->
	<customTabBar Title="趣学课程"></customTabBar>
	
	<!-- 背景图 -->
	<image class="bg" src='../../static/background-img.png'></image>
	
	<view class="top">
		<view class="top-image">
			<view class="top-text">
				<text class="top-title">非遗文化体验</text><br>
				<text class="top-english">Intangible Cultural Heritage Experience</text>
			</view>
		</view>
		<view class="top-mask">
		</view>
		
		<view class="good-title">
		  <text>在线课程</text>
		</view>
		
		<view class="good-nav">
			<view class="good-kc">
				<view class="good-text">
					<text>纯植物颜料扎染学习</text><br>
					<text>植物扎染</text>
				</view>
				<view class="bg-image"></view>
			</view>
			<view class="good-kc">
				<text>纯植物颜料扎染学习</text>
				<text>植物扎染</text>
				<view class="bg-image"></view>
			</view>
			<view class="good-kc">
				<text>纯植物颜料扎染学习</text>
				<text>植物扎染</text>
				<view class="bg-image"></view>
			</view>
			<view class="good-kc">
				<text>纯植物颜料扎染学习</text>
				<text>植物扎染</text>
				<view class="bg-image"></view>
			</view>
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
	  		margin-top: 12rpx;
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
			background-image: linear-gradient(180deg, transparent, rgba(191, 227, 227, 50)),
			url("../../static/IMG_5779.jpg");
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 16rpx;
			
			.top-text {
				margin-top: 330rpx;
				margin-left: 40rpx;
				.top-title {
					font-size: 50rpx;
				}
				.top-english {
					font-size: 10rpx;
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
		
		.good-nav {
			height: 500rpx;
			display: flex;
			justify-content: space-between;
			background-color: aqua;
			
			.good-kc {
				height: 335rpx;
				width: 135rpx;
				border-bottom-left-radius: 80rpx;
				border-bottom-right-radius: 80rpx;
				overflow: hidden;
				position: relative;
				.good-text {
					z-index: 2;
					writing-mode: vertical-rl;
					text-orientation: mixed;
					float: right;
					padding: 10rpx;
				}
				
				.bg-image {
					z-index: 1;
					position: absolute;
					top: 50rpx;
					height: 100%;
					width: 100%;
					background-image: url("../../static/image.png");
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
				}
				
				&:nth-child(2) {
					margin-top: 165rpx;
				}
				
				&:nth-child(4) {
					margin-top: 165rpx;
				}
			}
		}
	}
</style>
