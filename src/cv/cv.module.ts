import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CV } from './entities/cv.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CV])
  ],
  controllers: [CvController],
  providers: [CvService]
})
export class CvModule {}
