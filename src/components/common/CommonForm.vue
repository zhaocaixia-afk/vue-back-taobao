<template>
  <el-form :model="form" ref="form" label-width="100px" :inline="inline">
    <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
      <!-- v-if是为了让默认值为0 -->
      <el-input v-model="form[item.model]" :placeholder="`请输入${item.label}`" v-if="!item.type"></el-input>
      <el-select v-model="form[item.model]" :placeholder="`请输入${item.label}`" v-if="item.type === 'select'">
        <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-date-picker v-model="form[item.model]" :placeholder="`请输入${item.label}`" v-if="item.type === 'date'"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CommonForm',
  props: {
    inline: Boolean,
    form: Object, //form的数据
    formLabel: Array //需要的表单项
  }
}
</script>

<style scoped lang="scss"></style>
