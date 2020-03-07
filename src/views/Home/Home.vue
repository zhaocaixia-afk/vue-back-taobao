<template>
  <el-row :gutter="20" class="home" style="margin: 0;">
    <el-col :span="8" class="left">
      <el-card shadow="hover" class="left-top">
        <div class="user">
          <img src="../../assets/img/user.png" />
          <div class="userinfo">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-time">
          <p>上次登录时间 : <span>2019-08-08</span></p>
          <p>上次登录地点 : <span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" class="left-bottom">
        <el-table :data="tableData" stripe>
          <el-table-column show-overflow-tooltip v-for="(item, index) in tableLabel" :key="index" :prop="index" :label="item"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" class="right">
      <div class="right-top">
        <el-card shadow="hover" v-for="(item, index) in countData" :key="index" :body-style="{ display: 'flex', padding: 0 }">
          <div class="bgColor" :style="{ background: item.color }">
            <i :class="`el-icon-${item.icon}`"></i>
          </div>
          <div class="textContainer">
            <p class="money">¥ {{ item.value }}</p>
            <p class="text">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHomeData } from 'network/home'
export default {
  name: 'Home',
  data() {
    return {
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      }
    }
  },
  created() {
    this._getHomeData()
  },
  methods: {
    async _getHomeData() {
      const result = await getHomeData()
      if (result.code === 20000) {
        this.tableData = result.data.tableData
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  .left {
    .left-top {
      height: 200px;
      .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #999;
        padding-bottom: 15px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-right: 20px;
        }
        &info {
          .name {
            font-size: 20px;
          }
          .access {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .login-time {
        margin-top: 20px;
        font-size: 12px;
        color: #999;
        p {
          line-height: 26px;
          span {
            margin-left: 20px;
          }
        }
      }
    }
    .left-bottom {
      margin-top: 20px;
    }
  }
  .right {
    .right-top {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .el-card {
        width: 32%;
        margin-bottom: 10px;
        height: 60px;
        .bgColor {
          width: 60px;
          text-align: center;
          i {
            line-height: 60px;
            text-align: center;
            font-size: 32px;
          }
        }
        .textContainer {
          margin-left: 20px;
          .money {
            font-size: 22px;
            margin: 5px 0;
          }
          .text {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
