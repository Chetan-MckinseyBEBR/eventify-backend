import { Injectable } from '@nestjs/common';
import { IEvent } from './interfaces/event.interface';

@Injectable()
export class EventsService {
  private readonly events: IEvent[] = [];

  findAll(): IEvent[] {
    // TODO: database call
    return this.events;
  }

  findOne(): IEvent {
    // TODO: database call
    return this.events[0];
  }

  updateIsRegistered(eventId, isRegistered): string {
    // TODO: database call
    return `Updated ${eventId} with ${isRegistered}`;
  }

  updateIsBookmarked(eventId, isBookmarked): string {
    // TODO: database call
    return `Updated ${eventId} with ${isBookmarked}`;
  }
}
