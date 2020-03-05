<template>
  <div class="tabs">
    <el-tag
      :key="tag.path"
      v-for="tag in tabsList"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'light'"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tabsList: state => state.tab.tabsList
    })
  },
  methods: {
    handleClose(tag) {
      this.$store.commit('closeTab', tag)
    },
    changeMenu(tag) {
      this.$router.push({ name: tag.name })
      this.$store.commit('selectMenu', tag)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  padding: 10px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
