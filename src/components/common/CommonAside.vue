<template>
  <el-menu background-color="#545c64" text-color="#fff">
    <el-submenu :index="item.path" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item :index="itemChild.path" v-for="(itemChild, indexChild) in item.children" :key="indexChild">
        <template slot="title">
          <i :class="`el-icon-${itemChild.icon}`"></i>
          <span>{{ itemChild.label }}</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2" v-for="(item, index) in noChildren" :key="index">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'CommonAside',
  data() {
    return {
      asideMenu: [
        { path: '/', label: '首页', icon: 's-home' },
        { path: '/video', label: '视频管理', icon: 'video-play' },
        {
          path: '/user',
          label: '用户管理',
          icon: 'user',
          children: [{ path: '/page1', label: '页面1', icon: 'setting' }]
        },
        {
          path: '/other',
          label: '其它',
          icon: 'more',
          children: [{ path: '/page1', label: '页面1', icon: 'setting' }]
        }
      ]
    }
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    }
  }
}
</script>
<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
