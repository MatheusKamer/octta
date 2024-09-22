import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsUUID()
  @ApiProperty()
  userId: string;

  @IsString()
  @ApiProperty()
  imageUrl: string;

  @IsBoolean()
  @ApiProperty()
  isActive?: boolean;
}
