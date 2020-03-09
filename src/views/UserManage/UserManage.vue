<template>
  <div class="manage">
    <!-- 表单 -->
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户数据'" :visible.sync="dialogFormVisible">
      <common-form :formLabel="operateFormLabel" :form="operateForm" ref="form"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

    <div class="manage-header">
      <el-button type="primary" @click="addUser">+新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="changePage" @edit="editUser" @del="deleteUser"></common-table>
    </div>
  </div>
</template>

<script>
import { getUserList, editUser, addUser, deleteUser } from 'network/user'

import CommonForm from 'components/common/CommonForm'
import CommonTable from 'components/common/CommonTable'

export default {
  name: 'UserManage',
  data() {
    return {
      operateType: '',
      dialogFormVisible: false,
      // 新增表单的值
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      // 新增表单的项
      operateFormLabel: [
        { model: 'name', label: '姓名' },
        { model: 'age', label: '年龄' },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            { label: '男', value: 1 },
            { label: '女', value: 0 }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址'
        }
      ],
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
  created() {
    this._getUserList()
  },
  methods: {
    async _getUserList(name = '') {
      // 配置正在加载中
      this.config.loading = true
      name ? (this.config.page = 1) : ''
      const result = await getUserList({ page: this.config.page, name })
      if (result.code === 20000) {
        this.tableData = result.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = result.count
        this.config.loading = false
      }
    },
    // 2.页数的改变
    changePage(page) {
      // console.log(page)
      this.config.page = page
      this._getUserList()
    },
    // 3.添加用户
    addUser() {
      this.operateForm = {}
      this.operateType = 'add'
      this.dialogFormVisible = true
    },
    // 4.编辑用户
    editUser(row) {
      this.operateType = 'edit'
      this.dialogFormVisible = true
      // console.log(row)
      this.operateForm = row
    },
    // 5.点击确认按钮
    confirm() {
      if (this.operateType === 'edit') {
        editUser(this.operateForm).then(res => {
          // console.log(res)
          if (res.code === 20000) {
            this.dialogFormVisible = false
            this._getUserList()
          }
        })
      } else {
        addUser(this.operateForm).then(res => {
          if (res.code === 20000) {
            this.dialogFormVisible = false
            this._getUserList()
          }
        })
      }
    },
    // 6.删除
    deleteUser(row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let id = row.id
          deleteUser({ id }).then(res => {
            if (res.code === 20000) {
              this.$message({
                type: 'success',
                message: res.message
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
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
