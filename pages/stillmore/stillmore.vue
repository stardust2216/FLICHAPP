<template>
	<view class="bgc">
		<view class="square">
			<navigator url="/pages/stillmore/IntangibleHeritageMart"  @click="navigateTo">
			      <view class="IntangibleHeritageMart">
			        <text class="shopText">非遗商城</text>
			        <image src="../../static/页面4/1.png" class="shopImg"></image>
			      </view>
			    </navigator>
			<navigator url="/pages/stillmore/FunLearnCustom" @click="navigateTo">
			      <view class="FunLearnCustom" >
			        <image src="../../static/页面4/2.png" class="CustomImg"></image>
			        <text class="CustoomText">趣学定制</text>
			      </view>
			    </navigator>
			<navigator url="/pages/stillmore/ContactUs" @click="navigateTo">
			      <view  class="ContactUs" >
			        <text class="ContactUsText">预约展览</text>
			        <image src="../../static/页面4/3.png" class="ContactUsImg"></image>
			      </view>
			    </navigator>
			<navigator url="/pages/stillmore/Communication"  @click="navigateTo">
			      <view class="Communication">
			        <text class="CommunicationText">交流区</text>
			        <image src="../../static/页面4/4.png" class="CommunicationImg"></image>
			      </view>
			    </navigator>
		</view>
		
	</view>
</template>

<script>
export default {
  methods: {
    navigateTo(event) {
      // 从事件对象中获取url，并执行页面跳转
      const url = event.currentTarget.dataset.url;
      if (url) {
        uni.navigateTo({
          url: url,
          success: function () {
            console.log('跳转成功');
          },
          fail: function (err) {
            console.error('跳转失败', err);
          }
        });
      }
    }
  }
};
</script>

<style scoped>
	.bgc{
		height: 100%;
		width: 100%;
		position: absolute;
		background-image: url('../../static/background-img.png');
		background-size: cover; 
		padding-top: 100rpx;
		
	}
	.square{
		background-color: #f6f4e6;
		border-radius: 40rpx;
		height: 80vh;
		padding-top: 30rpx;
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
	@font-face {
		font-family: 'MyCustomFont';
		src: url('../static/fonts/SourceHanSerifCN-Light-5.otf') format('opentype');
	}
	.shopImg{
		height: 110rpx;
		width: 120rpx;
		padding: 60rpx;
	}
	.shopText{
		margin:120rpx 80rpx;
		font-size: 25px;
		font-weight: bolder;
		font-family: 'MyCustomFont';
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
		font-weight: bolder;
		font-family: 'MyCustomFont';
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
		font-size: 22px;
		/* font-weight: bolder; */
		margin:120rpx 10rpx;
		font-family: 'MyCustomFont';
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
		font-size: 25px;
		font-weight: bolder;
		font-family: 'MyCustomFont';
	}
</style>
