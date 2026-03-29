import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Academia } from './academia.entity';
import { AcademiaTranslation } from './academia-translation.entity';
import { AcademiaService } from './academia.service';
import { AcademiaController } from './academia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Academia, AcademiaTranslation])],
  providers: [AcademiaService],
  controllers: [AcademiaController],
})
export class AcademiaModule {}
