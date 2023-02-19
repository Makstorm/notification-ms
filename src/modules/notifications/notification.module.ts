import { NotificationEntity, NotificationServiceTag } from '@domain';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationController } from './Notification.controller';
import { NotificationService } from './Notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationEntity])],
  controllers: [NotificationController],
  providers: [
    { provide: NotificationServiceTag, useClass: NotificationService },
  ],
})
export class NotificationModule {}
