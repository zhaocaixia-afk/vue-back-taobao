<template>
  <el-container style="height:100%;">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <common-aside />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from 'components/common/CommonAside'

export default {
  name: 'CommonAsideName',
  components: {
    CommonAside
  }
}
</script>
<style scoped lang="scss">
el-header {
  color: $theme-color;
}
</style>
