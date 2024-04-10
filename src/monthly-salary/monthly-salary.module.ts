import { Module } from '@nestjs/common';
import { MonthlySalaryService } from './monthly-salary.service';
import { MonthlySalaryController } from './monthly-salary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlySalary } from './entities/monthly-salary.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MonthlySalary])
  ],
  providers: [MonthlySalaryService],
  controllers: [MonthlySalaryController]
})
export class MonthlySalaryModule {}
