export interface Event {
  id: number;
  name: string;
  description: string;
  venue: string;
  datetime: Date;
  areSeatsAvailable: boolean;
  isRegistered: boolean;
  isBookmarked: boolean;
}
