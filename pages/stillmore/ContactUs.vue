<template>
	<view class="bgc">
		<view class="formBox">
			<view class="formHead">
				<text style="text-align: center;font-size: 40rpx;">反馈建议</text>
				<text style="font-family: 'MyCustomFont';margin-top: 40rpx;">欢迎您为趣学非遗小程序的开发和维护提出宝贵的意见和建议!</text>
			</view>
			<view class="form-item-head">
				<image src="../../static/页面4/LiuYanIcon.png" mode=""></image>
				<text style="margin-top: -65rpx; margin-left: -350rpx;font-weight: bold;">留言信息</text>
				<view class="message">
					<input type="text" placeholder="请输入意见和建议" />
				</view>
			</view>
			<view class="form-item-head">
				<image src="../../static/页面4/LiuYanIcon.png" mode=""></image>
				<text style="margin-top: -65rpx; margin-left: -350rpx;font-weight: bold;">手机号</text>
				
			</view>
			<view class="form-item">
				<input type="text" placeholder="请输入您的手机号码" />
			</view>
			<view class="form-item">
				<input type="text" placeholder="请输入短信验证码" />
				<button size="mini">获取验证码</button>
			</view>
			<button class="submit-button" type="primary">提交</button>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.formBox {
		margin: auto;
		margin-top: 50rpx;
		padding-top: 20rpx;
		width: 90%;
		height: 80%;
		background-color: #dcd3ca;
		border-radius: 20rpx;
	}

	@font-face {
		font-family: 'MyCustomFont';
		src: url('../static/fonts/SourceHanSerifCN-Light-5.otf') format('opentype');
		
	}
	@font-face {
		font-family: 'MyCustomFontBold';
		src: url('../static/fonts/SourceHanSerifCN-Heavy-4.otf') format('opentype');
	}
	.formHead{
		display: flex;
		flex-direction: column;
		align-content: baseline;
		padding: 20rpx;
		font-family: 'MyCustomFontBold';
	}
	.form-item-head{
		display: flex;
		flex-direction:column;
		align-items: center;
		font-family: 'MyCustomFont';
	}
	.form-item-head image{
		margin-left: -550rpx;
		width: 80rpx;
		height: 80rpx;
	}
	
	.message{
		width: 95%;
		height: 250rpx;
		margin: auto;
		margin-top: 20rpx;
		padding: 20rpx;
		background-color: #f5f4f1;
		border-radius: 10rpx;
	}
	.form-item {
		display: flex;
		align-items: center;
		width: 95%;
		margin: auto;
		margin-top: 20rpx;
		padding: 20rpx;
		background-color: #f5f4f1;
		border-radius: 10rpx;
	}

	.form-item text {
		font-family: 'MyCustomFont';
		width: 80px;
		font-size: 16px;
	}

	.form-item input {
		font-family: 'MyCustomFont';
		flex: 1;
		/* 填充剩余空间 */
		margin-left: 10px;
		/* 与标签的间距 */
		font-size: 14px;
	}

	.mini {
		margin-left: 10px;
		padding: 5px 10px;
		font-family: 'MyCustomFont';
		background-color: #ccbaa5;
		color: #ccbaa5;
		border-radius: 10rpx;
		border: none;
	}

	.submit-button {
		margin-top: 20px;
		background-color: #f5f4f1;
		font-family: 'MyCustomFontBold';
		color:black;
		border-radius: 4px;
		border: none;
		width: 95%;
		padding: 10px 20px;
	}
</style>