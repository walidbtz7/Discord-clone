import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, ObjectId } from "mongoose";
import { UserDocument } from "src/user/schemas/user.schema";
import { RoomDocument } from "../../room/schemas/room.schema";

export type MessageDocument = Message & Document<ObjectId>;

@Schema({ timestamps: true })
export class Message {
	@Prop({ required: true })
	content: String;

	@Prop({ required: true, type: mongoose.Types.ObjectId, ref: "User" })
	sendBy: UserDocument;

	@Prop({  type: mongoose.Types.ObjectId, ref: "Room" })
	room: RoomDocument;
}

export const MessageSchema = SchemaFactory.createForClass(Message);