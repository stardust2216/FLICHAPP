<template>
	
	<!-- 全局 -->
	<view class="Box">
		
		<!-- 标题 -->
		<view class="top">
			<view>
					<!-- 提示信息弹窗 -->
					<uni-popup ref="message" type="message" >
						<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
					</uni-popup>
			</view>
		</view>
		
		
		
		<!-- 主体 -->
		<view class="body">
			
			<uni-section title="新建内容" type="line">
				<view class="example">
					<!-- 基础表单校验 -->
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="标题" required name="title">
							<uni-easyinput v-model="valiFormData.title" placeholder="请输入内容标题" />
						</uni-forms-item>
						<uni-forms-item label="景区地址"  name="address">
							<uni-easyinput v-model="valiFormData.address" placeholder="请输入推荐地址" />
						</uni-forms-item>
						<uni-forms-item label="内容介绍" required name="content">
							<uni-easyinput type="textarea" v-model="valiFormData.content" placeholder="请输入论坛内容" />
						</uni-forms-item>
					</uni-forms>
					<button type="primary" @click="submit('valiForm')">提交</button>
				</view>
			</uni-section>
					
				
		</view>
		<!-- 主体 -->
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//存储
				valiFormData: {
					title: '',
					address: '',
					content: ''
				},
				
				// 校验
				rules: {
					title: {
						rules: [{
							required: true,
							errorMessage: '标题不能为空'
						}]
					},
					content: {
						rules: [{
							required: true,
							errorMessage: '内容不能为空'
						}]
					}
				}			
			
			
			}
		},
		methods: {
		
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					let detail = res
					uni.showToast({
						title: `校验通过`
					})
					
					uniCloud.callFunction({
						name:"NewdiscussAdd",
						data:{
							detail:detail
						}
					}).then(res => {
						console.log("传入结果",res)
					})
					
					
				}).catch(err => {
					console.log('err', err);
				})
			}
						
						
						
						
		},onLoad() {
			
		}
	}
</script>

<style lang="scss">

	.body{
		
		.Add{
			
			.additem{
				border: 1rpx solid #d4d4d4;
				padding: 5rpx;
				border-radius: 10rpx;
				margin: 10rpx;
			}
			
			.buttonitme{
				padding: 5rpx;
				border-radius: 10rpx;
				margin: 10rpx;
			}
		}
		
	}


	
		.example {
			padding: 15px;
			background-color: #fff;
		}
	


</style>
