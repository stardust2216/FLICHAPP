<template>
	<view class="bgc">
		<view class="IntangibleHeritageMart">
			<text class="shopText">文创商店</text>
			<image src="../../static/页面4/1.png" class="shopImg"></image>
		</view>
		<view class="FunLearnCustom">
			<image src="../../static/页面4/2.png" class="CustomImg"></image>
			<text class="CustoomText">趣学定制</text>
		</view>
		<view class="ContactUs">
			<text class="ContactUsText">预约展览</text>
			<image src="../../static/页面4/3.png" class="ContactUsImg"></image>
		</view>
		<view class="Communication">
			<text class="CommunicationText">交流区</text>
			<image src="../../static/页面4/4.png" class="CommunicationImg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.bgc{
	height: 100%;
	width: 100%;
	position: absolute;
	background-color: #f7f3e8;
	padding-top: 40rpx;
	
}
.IntangibleHeritageMart{
	background-color: #d18355;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 200rpx;
	width: 700rpx;
	margin: auto;
	border-radius: 10px;
}
.shopImg{
	height: 110rpx;
	width: 120rpx;
	padding: 60rpx;
}
.shopText{
	margin:120rpx 80rpx;
	font-size: 20px;
	font-weight: bold;
}
.FunLearnCustom{
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 200rpx;
	width: 300rpx;
	background-color: #deb863;
	margin:25rpx ;
	border-radius: 10px;
}
.CustomImg{
	width: 110rpx;
	height: 110rpx;
	padding: 15rpx;
}
.CustoomText{
	font-size: 20px;
	font-weight: bold;
}
.ContactUs{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color:#5b9c96 ;
	border-radius: 10px;
	height: 200rpx;
	width: 380rpx;
	margin-top: -225rpx;
	margin-left: 350rpx;
}
.ContactUsImg{
	width: 110rpx;
	height: 110rpx;
	padding: 40rpx;
}
.ContactUsText{
	font-size: 20px;
	font-weight: bold;
	margin:120rpx 10rpx;
}
.Communication{
	background-color: #aaff7f;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 200rpx;
	width: 700rpx;
	margin: auto;
	margin-top: 20rpx;
	border-radius: 10px;
}
.CommunicationImg{
	height: 110rpx;
	width: 120rpx;
	padding: 60rpx;
}
.CommunicationText{
	margin:120rpx 80rpx;
	font-size: 20px;
	font-weight: bold;
}
</style>
