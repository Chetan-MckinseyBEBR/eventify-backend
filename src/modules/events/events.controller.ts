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
  findAll(): string {
    return 'This action returns all events';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns events ${id}`;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(HttpStatus.OK)
  updateEvent(@Param('id') id: number, @Body() body: UpdateEventDto) {
    if (body.isBookmarked !== undefined) {
      this.eventsService.updateIsBookmarked(id, body.isBookmarked);
    }

    if (body.isRegistered !== undefined) {
      this.eventsService.updateIsRegistered(id, body.isRegistered);
    }

    if (body.isBookmarked === undefined && body.isRegistered === undefined) {
      throw new BadRequestException('Not a valid request body');
    }

    return 'Event Updated!!!';
  }
}
