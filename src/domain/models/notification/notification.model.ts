import { NotificationEntity } from 'src/domain/entities';

export class NotificationModel {
  public id: string;

  public mainMessage: string;

  public additionalMessage: string;

  public reciever: string;

  public static formEntity(
    notification: NotificationEntity,
  ): NotificationModel {
    if (!notification) {
      return null;
    }
    const model = new NotificationModel();

    model.id = notification.id;
    model.mainMessage = notification.mainMessage;
    model.additionalMessage = notification.additionalMessage;
    model.reciever = notification.reciever;

    return model;
  }
}
