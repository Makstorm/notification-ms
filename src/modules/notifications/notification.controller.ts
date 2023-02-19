import {
  INotificationService,
  NotificationDto,
  NotificationModel,
  NotificationServiceTag,
} from '@domain';
import { Get } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller, Inject } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('Notification')
export class NotificationController {
  @Inject(NotificationServiceTag)
  private readonly service: INotificationService;

  @ApiResponse({ type: NotificationModel })
  @Post()
  public async sendNotification(
    @Body() dto: NotificationDto,
  ): Promise<NotificationModel> {
    const ntfc = await this.service.sendNotification(dto);
    return NotificationModel.formEntity(ntfc);
  }
  @ApiResponse({ type: [NotificationModel] })
  @Get()
  public async getAllNotification(): Promise<NotificationModel[]> {
    const ntfcArr = await this.service.getAllNotifications();
    return ntfcArr.map((e) => NotificationModel.formEntity(e));
  }
}
