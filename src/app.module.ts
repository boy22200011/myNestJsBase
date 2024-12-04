import { MomentModule } from "./common/momnet/moment.module"
import { AxiosModule } from "./common/axios/axios.module"
import { LodashModule } from "./common/lodash/lodash.module"
import { KnexModule } from "./common/knex/knex.module"
import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule } from "@nestjs/config"
@Module({
  imports: [
    MomentModule,
    AxiosModule,
    LodashModule,
    KnexModule,
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV || "development"}`, ".env"],
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
