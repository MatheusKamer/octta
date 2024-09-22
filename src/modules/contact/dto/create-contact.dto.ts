import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';
import { IsEmail, Length } from 'class-validator';

export class CreateContactDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @Matches(/^[0-9]+$/, { message: 'Phone must contain only numbers' })
  @Length(10, 15)
  @ApiProperty()
  phone: string;

  @IsString()
  @Length(5, 200)
  @ApiProperty()
  address: string;
}
