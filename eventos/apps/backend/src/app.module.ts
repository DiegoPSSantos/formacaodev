import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [EventosModule],
  providers: [AppService],
})
export class AppModule {}
