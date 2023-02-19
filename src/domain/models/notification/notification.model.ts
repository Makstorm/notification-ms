import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class NotificationModel {
  @ApiProperty({ type: String, example: randomUUID() })
  public id: string;

  @ApiProperty({ type: String, example: 'Its main message from notification' })
  public mainMessage: string;

  @ApiProperty({
    type: String,
    example: 'Its additionalMessage from notification',
  })
  public additionalMessage: string;

  public static formEntity(notification: NotificationModel): NotificationModel {
    if (!notification) {
      return null;
    }
    const model = new NotificationModel();

    model.id = notification.id;
    model.mainMessage = notification.mainMessage;
    model.additionalMessage = notification.additionalMessage;

    return model;
  }
}
