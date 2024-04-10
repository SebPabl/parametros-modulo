import { Module } from '@nestjs/common';
import { DegreeCategoryService } from './degree-category.service';
import { DegreeCategoryController } from './degree-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DegreeCategory } from './entities/degree-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DegreeCategory])
  ],
  providers: [DegreeCategoryService],
  controllers: [DegreeCategoryController]
})
export class DegreeCategoryModule {}
