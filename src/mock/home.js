import Mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'springboot',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 1000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'vue',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 1000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '小程序',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 1000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'ES6',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 1000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Redis',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 1000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'React',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 1000, 0, 2),
            totalBuy: Mock.Random.float(1000, 10000, 0, 2)
          }
        ]
      }
    }
  }
}
