import { IsString, MinLength } from 'class-validator';
export class DTOCreateCard {
  @IsString()
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}
