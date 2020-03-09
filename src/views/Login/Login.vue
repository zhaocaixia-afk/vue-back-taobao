<template>
  <div class="login">
    <el-form :model="form" label-width="120">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item align="center">
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '../../network/login'

export default {
  name: 'CommonForm',
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    login() {
      login(this.form).then(res => {
        console.log(res)
        if (res.code === 20000) {
          this.$store.commit('clearMenu')
          this.$store.commit('setMenu', res.data.menu)
          this.$store.commit('setToken', res.data.token)
          // this.$router.push({ name: 'main' })
          this.$store.commit('addMenu', this.$router)
          this.$router.push({ name: 'home' })
        } else {
          this.$notify.error({
            message: res.data.message
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.el-form {
  width: 50%;
  height: 450px;
  margin: auto;
  padding: 45px;
  background-color: #fff;
}
</style>
