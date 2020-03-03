<template>
  <el-container style="height:100%;">
    <el-aside width="200px">
      <common-aside />
    </el-aside>
    <el-main>
      <el-header>
        <common-header />
      </el-header>
      <el-main></el-main>
    </el-main>
  </el-container>
</template>

<script>
import CommonAside from 'components/common/CommonAside'
import CommonHeader from 'components/common/CommonHeader'

export default {
  name: 'CommonAsideName',
  components: {
    CommonAside,
    CommonHeader
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
