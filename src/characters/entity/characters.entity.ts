import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class Characters {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  nameCharacter: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  species: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;

}