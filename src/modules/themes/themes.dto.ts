import { IsNotEmpty } from 'class-validator';

export class UpdateActiveTheme {
  @IsNotEmpty()
  preferredThemeId: number;
}
