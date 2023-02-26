import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Event extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  venue: string;

  @Column({})
  datetime: Date;

  @Column
  areSeatsAvailable: boolean;

  @Column({ defaultValue: true })
  isRegistered: boolean;

  @Column
  isBookmarked: boolean;
}
