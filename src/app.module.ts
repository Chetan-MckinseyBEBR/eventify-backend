import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './modules/events/events.module';

// TODO: Add swagger
// TODO: Add loggers
// TODO: Write unit tests
// TODO: Theme Module

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db.sqlite',
      autoLoadModels: true,
    }),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
