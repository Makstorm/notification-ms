import { Column } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

export class NotificationEntity extends AbstractEntity {
  @Column()
  public mainMessage: string;

  @Column()
  public additionalMessage: string;
}
