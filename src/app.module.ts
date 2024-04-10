import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from './staff/staff.module';
import { CvModule } from './cv/cv.module';
import { MonthlySalaryModule } from './monthly-salary/monthly-salary.module';
import { YearsParametersModule } from './years-parameters/years-parameters.module';
import { DegreeCategoryModule } from './degree-category/degree-category.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: "mssql",
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          autoLoadEntities: true,
          synchronize: true,
          options: { trustServerCertificate: true }
        }
      }
    }),
    StaffModule,
    CvModule,
    MonthlySalaryModule,
    YearsParametersModule,
    DegreeCategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
