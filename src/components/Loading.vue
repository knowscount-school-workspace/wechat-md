<!--
 * @Date: 27/03/2021 17.05.43 +0800
 * @Author: KnowsCount
 * @LastEditTime: 27/03/2021 17.19.01 +0800
 * @FilePath: /md/src/components/Loading.vue
-->
<template>
	<div class="loading" id="loading">
		<div class="loading-wrapper">
			<div class="loading-text">不再为微信文章排版而发愁！</div>
		</div>
	</div>
</template>

<script></script>

<style lang="less" scoped>
.loading-wrapper {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}
.loading {
	text-align: center;
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 99999;
	background-color: #f2f2f2;
}

.loading_night {
	background-color: #303133;
}

.loading-text {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 18px;
	font-weight: bold;
	margin-top: 26px;
	color: #303133;
}
</style>
