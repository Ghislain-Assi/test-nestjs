import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaysSchema } from './schema/pays.schema';
import { PaysService } from './pays.service';
import { PaysController } from './pays.controller';


@Module({
  imports:[
      MongooseModule.forFeature([{
          name:"Pays",
          schema:PaysSchema,
          collection:"Pays"
      }])
  ],
  providers: [PaysService],
  controllers: [PaysController]
})
export class PaysModule {}
