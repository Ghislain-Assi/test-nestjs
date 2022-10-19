import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose";


export type PaysDocument = Pays & Document;

@Schema({collection:'Pays'})
export class Pays {

    @Prop()
    code:String;

    @Prop()
    name:String;

    @Prop()
    language:String;

    @Prop()
    original:String;
}

export const PaysSchema = SchemaFactory.createForClass(Pays)