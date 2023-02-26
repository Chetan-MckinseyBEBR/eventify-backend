import { Controller, Get, Param } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll(): string {
    return 'This action returns all events';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns events ${id}`;
  }
}
