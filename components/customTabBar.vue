<template>
    <view class="layout">
        <view class="navbar">
            <view class="statusBar" :style="{ height: statusBarHeight + 'px' }">
                
            </view>
            <view class="titleBar">
                <view class="left">
                    <text>{{ Title }}</text>
                </view>
                <view class="right">
                    <image src="../static/1.png"></image>
                    <image src="../static/2.png"></image>
                    <text>签到</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: "customTabBar",
		props: ['Title'],
        setup() {
            // 使用ref定义响应式变量statusBarHeight
            const statusBarHeight = ref(0);

            // 获取设备信息并更新statusBarHeight的值
            const SYSTEM_INFO = uni.getSystemInfoSync();
            console.log(SYSTEM_INFO.statusBarHeight);
            statusBarHeight.value = SYSTEM_INFO.statusBarHeight;

            return {
                statusBarHeight // 将statusBarHeight暴露给模板
            };
        }
    }
</script>

<style lang="scss">
	@font-face {
		font-family: 'MyCustomFont';
		src: url('../static/fonts/XiangJiaoDaJiangJunLingGanTi-2.ttf') format('opentype');
	}
	
    .navbar {
        z-index: 10;
		.statusBar {
		}
        .titleBar {
			height: 70rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
            .left {
                margin-left: 42rpx;
                float: left;
				text {
					font-family: 'MyCustomFont';
					color: #696a60;
					font-size: 40rpx;
					font-weight: bold;
				}
            }
            .right {
				display: flex;
				align-items: center;
                margin-right: 190rpx;
                image {
                    width: 45rpx;
                    height: 45rpx;
                    margin-right: 25rpx;
                }
				text {
					font-size: 25rpx;
					font-weight: bold;
				}
            }
        }
    }
</style>
