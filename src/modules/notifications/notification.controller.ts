import {
  INotificationService,
  NotificationDto,
  NotificationModel,
  NotificationServiceTag,
} from '@domain';

import { Controller, Inject } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class NotificationController {
  @Inject(NotificationServiceTag)
  private readonly service: INotificationService;

  @MessagePattern('send_notification')
  public async sendNotification(
    @Payload() dto: NotificationDto,
    @Ctx() context: RmqContext,
  ): Promise<NotificationModel> {
    const ntfc = await this.service.sendNotification(dto);

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);

    console.log('Notification sended', dto);
    return NotificationModel.formEntity(ntfc);
  }
}
