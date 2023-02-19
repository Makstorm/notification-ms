import { ApiProperty } from '@nestjs/swagger';

export class NotificationDto {
  @ApiProperty({
    type: String,
    description:
      'A message that contains the main infomnation of notification content',
    example:
      'Hello dear customer, the user whose number you have in contacts has just registrated an account, would you like to add him to your friendlis or text him?',
  })
  public mainMessage: string;

  @ApiProperty({ type: String })
  public additionalMessage: string;
}
