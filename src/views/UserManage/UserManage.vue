<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">+新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config"></common-table>
    </div>
  </div>
</template>

<script>
import { getUserList } from '../../network/user'

import CommonForm from 'components/common/CommonForm'
import CommonTable from 'components/common/CommonTable'

export default {
  name: 'UserManage',
  data() {
    return {
      // 表单的项
      formLabel: [
        {
          model: 'keyword',
          label: ''
        }
      ],
      // 表单的值
      searchForm: {
        keyword: '',
        selectValue: ''
      },
      // 表格的项
      tableLabel: [
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'sexLabel', label: '性别' },
        { prop: 'birth', label: '出生日期', width: 200 },
        { prop: 'addr', label: '地址', width: 320 }
      ],
      // 表格的数据
      tableData: [],
      // 表格配置
      config: {
        page: 1,
        total: 30,
        loading: false
      }
    }
  },
  mounted() {
    this._getUserList()
  },
  methods: {
    async _getUserList(name = '') {
      // 配置正在加载中
      this.config.loading = true
      name ? (this.config.page = 1) : ''
      const result = await getUserList({ params: { page: this.config.page, name } })
      if (result.code === 20000) {
        this.tableData = result.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = result.count
        this.config.loading = false
      }
    }
  },
  components: {
    CommonForm,
    CommonTable
  }
}
</script>

<style scoped lang="scss">
.manage {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
