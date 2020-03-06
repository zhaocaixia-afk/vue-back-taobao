<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">+新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table></common-table>
    </div>
  </div>
</template>

<script>
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
        // {
        //   label: '下拉框',
        //   model: 'selectValue',
        //   type: 'select',
        //   opts: [
        //     { label: '区域一', value: 'shanghai' },
        //     { label: '区域二', value: 'beijing' }
        //   ]
        // }
      ],
      // 表单的值
      searchForm: {
        keyword: '',
        selectValue: ''
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
