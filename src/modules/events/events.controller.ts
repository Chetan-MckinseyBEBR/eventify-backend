import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateEventDto } from './events.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  async findAll() {
    return await this.eventsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.eventsService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(HttpStatus.OK)
  async updateEvent(@Param('id') id: number, @Body() body: UpdateEventDto) {
    if (body.isBookmarked !== undefined) {
      await this.eventsService.updateBookmark(id, body.isBookmarked);
    }

    if (body.isRegistered !== undefined) {
      await this.eventsService.updateRegister(id, body.isRegistered);
    }

    if (body.isBookmarked === undefined && body.isRegistered === undefined) {
      throw new BadRequestException('Not a valid request body');
    }

    return 'Event Updated!!!';
  }
}
