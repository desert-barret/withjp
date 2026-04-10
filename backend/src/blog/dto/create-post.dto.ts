import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsArray,
  IsDateString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PostTranslationDto } from './translation.dto';

export class CreatePostDto {
  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  featured_image?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  @IsDateString()
  published_at?: string;

  @IsOptional()
  @IsString()
  meta_title?: string;

  @IsOptional()
  @IsString()
  meta_description?: string;

  @IsOptional()
  @IsString()
  og_image?: string;

  @IsOptional()
  @IsNumber()
  reading_time?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostTranslationDto)
  translations: PostTranslationDto[];
}
