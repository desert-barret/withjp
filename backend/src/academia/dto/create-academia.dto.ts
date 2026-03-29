import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TranslationDto } from './translation.dto';

export class CreateAcademiaDto {
  @IsOptional() @IsString() subdomain_url?: string;
  @IsOptional() @IsString() image_url?: string;
  @IsOptional() @IsString() badge?: string;
  @IsOptional() @IsArray()  technologies?: string[];
  @IsOptional() @IsString() category?: string;
  @IsOptional() @IsBoolean() featured?: boolean;
  @IsOptional() @IsNumber()  sort_order?: number;
  @IsOptional() @IsBoolean() active?: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TranslationDto)
  translations: TranslationDto[];
}
