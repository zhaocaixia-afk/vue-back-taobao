<template>
  <el-container style="height:100%;">
    <el-aside width="200px">
      <common-aside />
    </el-aside>
    <el-main>
      <el-header>
        <common-header />
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
