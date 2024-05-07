<template>
	<view class="bgc">
		<view class="heritage-list">
			<view v-for="(item, index) in heritagelist" :key="index" class="heritage-item">
				
				<image class="heritage-image" :src="item.image" />
				
				<view class="heritage-text">
					<text style="font-size: 35rpx;font-weight: bolder;">{{item.title}}</text>
					<text class="title">{{ item.tag }}</text>
					<view class="heritage-text-small">
						<image src="../../static/页面3/location.png" mode=""></image>
						<text class="location">{{ item.address }}</text>
					</view>
					
				</view>
				
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				// 假设这是从某个API获取的非遗数据
				heritageData: [{
						title: '宾阳炮龙节',
						location: '南宁·宾阳',
						imageUrl: '/static/uni.png'
					},
					{
						title: '宾阳炮龙节',
						location: '南宁·宾阳',
						imageUrl: '/static/uni.png'
					},
					{
						title: '宾阳炮龙节',
						location: '南宁·宾阳',
						imageUrl: '/static/uni.png'
					},
				],
				heritagelist:[]	
			};
		},methods:{
			
			
			
			
		},onLoad() {
			uniCloud.callFunction({
				name:"ExStudyGet"
			}).then(res => {
				this.heritagelist = res.result.data
				console.log(this.heritagelist)
			})
			
			
		}
	};
</script>

<style lang="scss">
	.bgc {
		height: 100%;
		width: 100%;
		position: absolute;
		background-image: url('../../static/background-img.png');
		background-size: cover;
		padding-top: 80rpx;
	}

	.heritage-list {
	  display: flex;
	  flex-direction: column;
	  align-items: flex-start;
	
	}
	.heritage-item {
	  display: flex;
	  align-items: center;
	  background-color: #ddd4cb; 
	  margin: auto;
	  padding: 15px; 
	  margin-bottom: 20px; 
	  border-radius: 8px; 
	  width: 90%;
	  
	}
	
	.heritage-image {
	  width: 100px;
	  height: 130px; 
	  margin-right: 20px; 
	}
	
	.heritage-text {
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	}
	.heritage-text image{
		width: 50rpx;
		height: 50rpx;
	}
	.heritage-text-small{
		display: flex; 
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 20rpx;
	}
	.title {
	  font-size: 15px; 
	  margin-top: 10rpx;
	}
	
	.location {
	  font-size: 20px; 
	  margin-right: 15rpx;
	  
	}
</style>