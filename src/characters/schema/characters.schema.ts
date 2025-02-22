import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import { Url } from "url"
export type CharactersDocument = Characters & Document

@Schema()
export class Characters {
    @Prop({required: true})
    nameCharacter: string
    @Prop({required: true})
    status: string
    @Prop({required: true})
    species: string
    @Prop({required: true})
    location: string
    @Prop({required: true})
    image: Url
}
export const charactersSchema = SchemaFactory.createForClass(Characters)