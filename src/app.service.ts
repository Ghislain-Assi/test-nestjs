import { Injectable } from '@nestjs/common';
import {Dataset} from 'data.js';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello Assi!';
  }

}
