import { Injectable } from '@nestjs/common';
import { IEvent } from './interfaces/event.interface';

@Injectable()
export class EventsService {
  private readonly events: IEvent[] = [];

  create(event: IEvent) {
    this.events.push(event);
  }

  findAll(): IEvent[] {
    return this.events;
  }
}
