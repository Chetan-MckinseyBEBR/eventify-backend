import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateActiveTheme } from './themes.dto';

@Controller('themes')
export class ThemesController {
  @Get()
  async findAll() {
    return 'Return all themes';
  }

  @Put()
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(HttpStatus.OK)
  updateActiveTheme(@Body() body: UpdateActiveTheme) {
    return 'Updated' + JSON.stringify(body);
  }
}
