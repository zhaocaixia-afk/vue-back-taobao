<template>
  <div class="common-table">
    <el-table :data="tableData" style="width: 100%" stripe v-loading="config.loading">
      <el-table-column label="序号" width="85">
        <template slot-scope="scope">
          <span>{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tableLabel" :key="item.prop" :label="item.label" :width="item.width ? item.width : 120">
        <template slot-scope="scope">
          <span>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="config.total" :current-page.sync="config.page" @current-change="changePage" :page-size="20">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object
  },
  methods: {
    handleEdit(row) {
      this.$emit('edit', row)
    },
    handleDelete(row) {
      this.$emit('del', row)
    },
    changePage(page) {
      this.$emit('changePage', page)
    }
  }
}
</script>

<style scoped lang="scss">
.common-table {
  position: relative;
  .el-pagination {
    position: absolute;
    bottom: -30px;
    right: 20px;
  }
}
</style>
