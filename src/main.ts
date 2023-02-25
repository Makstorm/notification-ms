import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const queueName = configService.getOrThrow('RABBITMQ_QUEUE_NAME');
  const host = configService.getOrThrow('RABBITMQ_HOST');
  const lochalHost = configService.getOrThrow('RABBITMQ_LOCAL_HOST');

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${host}`, `amqp://${lochalHost}`],
      queue: queueName,
      noAck: false,
      prefetchCount: 1,
      queueOptions: {
        durable: true,
      },
    },
  });

  app.startAllMicroservices();
}
bootstrap();
