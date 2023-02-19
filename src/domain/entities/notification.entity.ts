import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('notifications')
export class NotificationEntity extends AbstractEntity {
  @Column()
  public mainMessage: string;

  @Column()
  public additionalMessage: string;
}
