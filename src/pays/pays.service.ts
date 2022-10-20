import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaysDocument,Pays } from './schema/pays.schema';

@Injectable()
export class PaysService {
    constructor(
        @InjectModel(Pays.name) 
        private PaysModel:Model <PaysDocument>,
    ){}

    async getAll():Promise<Pays[]>{
        return this.PaysModel.find().exec();
    }

    async getRech(code:string,language:string,original:string){
        return this.PaysModel.find({
            code:code,
            language:language,
            original:original
        }).exec();
    }
    
    async getFiltre(name:string){
        
        return this.PaysModel.find({
            name:name
        }).exec();
    }
}