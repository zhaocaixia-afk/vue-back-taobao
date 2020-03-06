<template>
  <el-container style="height:100%;">
    <el-aside width="auto">
      <common-aside ref="commonAside" />
    </el-aside>

    <el-main class="total-container">
      <common-header @changeCollapse="changeCollapse" />
      <common-tabs />

      <el-main class="link-container">
        <router-view />
      </el-main>
    </el-main>
  </el-container>
</template>

<script>
import CommonAside from 'components/common/CommonAside'
import CommonHeader from 'components/common/CommonHeader'
import CommonTabs from 'components/common/CommonTabs'

export default {
  name: 'CommonAsideName',
  methods: {
    changeCollapse() {
      this.$refs.commonAside.isCollapse = !this.$refs.commonAside.isCollapse
    }
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTabs
  }
}
</script>

<style scoped lang="scss">
.total-container {
  padding: 0;
  .link-container {
    padding: 10px;
  }
}
</style>
