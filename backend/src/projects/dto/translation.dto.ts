import { IsString, IsOptional, IsIn } from 'class-validator';

export class TranslationDto {
  @IsIn(['es', 'en'])
  locale: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  short_description?: string;
}
