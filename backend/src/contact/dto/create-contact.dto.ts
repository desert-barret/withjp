import { IsString, IsEmail, IsOptional, MaxLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsString()
  @MaxLength(2000)
  message: string;

  @IsOptional()
  @IsString()
  source?: string;
}
