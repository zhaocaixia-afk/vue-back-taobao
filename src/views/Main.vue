<template>
  <el-container style="height:100%;">
    <el-aside width="auto">
      <common-aside ref="commonAside" />
    </el-aside>
    <el-main>
      <el-header>
        <common-header @changeCollapse="changeCollapse" />
      </el-header>
      <common-tabs />
      <el-main>
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
.el-main {
  padding: 0;
  .el-header {
    background: #eee;
  }
}
</style>
