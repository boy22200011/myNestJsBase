/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common"
import knex from "knex"

@Injectable()
export class KnexService {
  private knexInstance

  constructor() {
    // 根據你的資料庫配置進行修改
    this.knexInstance = knex({
      client: "mysql", // 或 'mysql2'，根據你的資料庫
      connection: {
        host: "localhost",
        user: "your-username",
        password: "your-password",
        database: "your-database"
      }
    })
  }

  // 返回 Knex 實例，讓其他服務可以使用它來執行 SQL 查詢
  getKnex() {
    return this.knexInstance
  }
}
