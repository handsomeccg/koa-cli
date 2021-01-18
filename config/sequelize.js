
const Sequelize = require('sequelize');
//创建like语句别名
const Op = Sequelize.Op;
const operatorAliases = {
  $like: Op.like
};

/**
 * Sequelize 中文文档：https://www.sequelize.com.cn/
 */
let baseName = 'koa',
  Account = 'root',
  PassWord = '123456',
  Host = '127.0.0.1';

/*if (process.env.NODE_ENV === 'pro') {
  Account = 'nationmap',
    PassWord = 'FuzcuDLYo2PR',
    Host = 'rds0nmrxwhyzd6028x8w681.mysql.rds.aliyuncs.com'
}*/
const sequelize = new Sequelize(baseName, Account, PassWord, {
  operatorAliases,
  host: Host,
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  /**
   * 链接数据库时，禁用时间戳，
   * 解决 使用sequelize创建model后，
   * 使用model进行findAll查询的时候报错：Sequelize Unknown column ‘*.createdAt’ in ‘field list’?
   */
  define: {
    timestamps: false,
    
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequelize
  .authenticate()
  .then(() => {
    console.log('MYSQL 连接成功......');
  })
  .catch(err => {
    console.error('链接失败:', err);
  });

// 根据模型自动创建表
sequelize.sync()

module.exports = sequelize