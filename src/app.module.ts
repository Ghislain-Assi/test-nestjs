import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaysModule } from './pays/pays.module';

@Module({
  imports: [
    PaysModule, 
    MongooseModule.forRoot("mongodb+srv://Ghislain:Ghislain03@cluster0.wngwnkl.mongodb.net/ListePays?retryWrites=true&w=majority"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
