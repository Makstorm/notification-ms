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

  @ApiProperty({
    type: String,
    description:
      'A message that contains the additional infomnation of notification content',
    example: 'With great pleasure, microservice',
  })
  public additionalMessage: string;

  @ApiProperty({
    type: String,
    example: 'Max Reciever',
  })
  public reciever;
}
