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
    .navbar {
        z-index: 10;
        .titleBar {
            .left {
				display: flex;
				justify-content: center;
				align-items: center;
                margin-left: 26rpx;
                float: left;
            }
            .right {
				display: flex;
				justify-content: center;
				align-items: center;
                float: right;
                margin-right: 180rpx;
                image {
                    width: 34rpx;
                    height: 34rpx;
                    margin-right: 20rpx;
                }
            }
        }
    }
</style>
