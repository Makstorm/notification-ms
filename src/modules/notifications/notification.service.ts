import {
  INotificationService,
  NotificationDto,
  NotificationEntity,
} from '@domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService implements INotificationService {
  @InjectRepository(NotificationEntity)
  private readonly repository: Repository<NotificationEntity>;

  public async sendNotification(
    dto: NotificationDto,
  ): Promise<NotificationEntity> {
    const notificationEntity = new NotificationEntity();

    notificationEntity.mainMessage = dto.mainMessage;
    notificationEntity.additionalMessage = dto.additionalMessage;
    notificationEntity.reciever = dto.reciever;

    return await this.repository.save(notificationEntity);
  }
}
