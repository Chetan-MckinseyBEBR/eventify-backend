import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  modelName: 'event',
  underscored: true,
})
export class Event extends Model<Event> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  venue: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  datetime: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  areSeatsAvailable: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isRegistered: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isBookmarked: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imgUrl: string;
}
