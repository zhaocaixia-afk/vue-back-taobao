<template>
  <el-menu background-color="#545c64" text-color="#fff" unique-opened>
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.path" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item :index="itemChild.path" v-for="(itemChild, indexChild) in item.children" :key="indexChild" @click="clickMenu(itemChild)">
        <template slot="title">
          <i :class="`el-icon-${itemChild.icon}`"></i>
          <span>{{ itemChild.label }}</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'CommonAside',
  data() {
    return {
      asideMenu: [
        { path: '/', label: '首页', icon: 's-home', name: 'home' },
        {
          path: '/video',
          label: '视频管理',
          icon: 'video-play',
          name: 'video'
        },
        {
          path: '/user',
          label: '用户管理',
          icon: 'user',
          name: 'user'
        },
        {
          path: '/other',
          label: '其它',
          icon: 'more',
          children: [
            { path: '/page1', label: '页面1', icon: 'setting', name: 'page1' },
            { path: '/page2', label: '页面2', icon: 'setting', name: 'page2' }
          ]
        }
      ]
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
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
  height: 100%;
}
</style>
