import {
  IsDate,
  IsEmail,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from '@nestjs/class-validator';
export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(25)
  username!: string;

  @IsEmail()
  email!: string;

  @IsString()
  passwordHash!: string;

  @IsString()
  @IsPhoneNumber()
  phoneNumber?: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsDate()
  dateOfBirth?: Date;
}
