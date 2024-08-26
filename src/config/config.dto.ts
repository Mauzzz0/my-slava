import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class ConfigDto {
  @IsNumber()
  @Type(() => Number)
  PORT: number;

  @IsString()
  POSTGRESQL_HOST: string;

  @IsString()
  POSTGRESQL_DATABASE: string;

  @IsString()
  POSTGRESQL_USERNAME: string;

  @IsString()
  POSTGRESQL_PASSWORD: string;

  @IsNumber()
  @Type(() => Number)
  POSTGRESQL_PORT: number;
}
