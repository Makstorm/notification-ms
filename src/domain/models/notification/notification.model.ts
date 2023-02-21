import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { NotificationEntity } from 'src/domain/entities';

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

  @ApiProperty({
    type: String,
    example: 'Max',
  })
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
