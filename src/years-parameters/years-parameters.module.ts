import { Module } from '@nestjs/common';
import { YearsParametersService } from './years-parameters.service';
import { YearsParametersController } from './years-parameters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YearsParameter } from './entities/years-parameters.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([YearsParameter])
  ],
  providers: [YearsParametersService],
  controllers: [YearsParametersController]
})
export class YearsParametersModule {}
