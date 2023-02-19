import { INotificationService, NotificationEntity } from '@domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService implements INotificationService {
  @InjectRepository(NotificationEntity)
  private readonly repository: Repository<NotificationEntity>;

  public sendNotification(): Promise<NotificationEntity> {
    throw new Error('Method not implemented.');
  }
  public getAllNotifications(): Promise<NotificationEntity[]> {
    throw new Error('Method not implemented.');
  }
}
