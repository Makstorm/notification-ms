import { NotificationDto } from '../../models';
import { NotificationEntity } from '../../entities';

export interface INotificationService {
  sendNotification(dto: NotificationDto): Promise<NotificationEntity>;
  getAllNotifications(): Promise<NotificationEntity[]>;
}
