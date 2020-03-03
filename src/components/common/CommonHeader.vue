<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: current.path }" v-if="current.path">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <i class="el-icon-user-solid"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  }
}
</script>
<style scoped lang="scss">
header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 15px;
    }
  }
  .r-content {
    .el-dropdown {
      i {
        font-size: 35px;
        border: 1px solid $theme-color;
        color: $theme-color;
        border-radius: 50%;
      }
    }
  }
}
</style>
