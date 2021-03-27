<!--
 * @Date: 27/03/2021 17.05.43 +0800
 * @Author: KnowsCount
 * @LastEditTime: 27/03/2021 17.23.03 +0800
 * @FilePath: /md/src/components/CodemirrorEditor/aboutDialog.vue
-->
<template>
	<el-dialog
		title="关于"
		class="about__dialog"
		:visible="value"
		@close="$emit('input', false)"
		width="30%"
		center
	>
		<div style="text-align: center">
			<h3>鹊起之鸦是一个自发的莎士比亚社团</h3>
		</div>
		<span slot="footer" class="dialog-footer">
			<el-button
				type="primary"
				@click="onRedirect('https://github.com/knowscount-school-workspace/md')"
				plain
				>GitHub 仓库</el-button
			>
		</span>
	</el-dialog>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onRedirect(url) {
			window.open(url);
		},
	},
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
	min-width: 420px;
}
</style>
