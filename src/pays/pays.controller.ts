import { Controller,Get,Post,Param } from '@nestjs/common';
import { PaysService } from './pays.service';

@Controller('pays')
export class PaysController {
    constructor(private PaysService:PaysService){}

    @Get()
    async getAll(){
        return this.PaysService.getAll()
    }   
    @Get("/:code/:language/:original")
    async getRech(
        @Param('code') code:string,
        @Param('language') language:string,
        @Param('original') original:string,
    ){
        return this.PaysService.getRech(code, language, original)
    } 

    @Get("/:name")
    async getFiltre(@Param('name') name:string){

        return this.PaysService.getFiltre(name)
    } 


}
