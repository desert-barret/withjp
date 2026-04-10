import { IsString, IsOptional, IsIn } from 'class-validator';

export class PostTranslationDto {
  @IsIn(['es', 'en'])
  locale: string;

  @IsString()
  title: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;
}
