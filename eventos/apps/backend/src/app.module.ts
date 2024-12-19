import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [EventosModule, DbModule],
  providers: [AppService],
})
export class AppModule {}
