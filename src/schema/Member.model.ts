// 1.moongoose ichidan schema degan qiymat xosil qilib olamiz
import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      //libs ichida enums folderini ochib olamiz
      enum: MemberType,
      //default valussini User deb belgilab olamiz
      default: MemberType.USER,
    },
    //memberStatus ni kiritib olamiz
    memberStatus: {
      type: String,
      // enum qiymatlar aniq belgilang qiymatlarni belgilshda ishlatiladigan type hisoblanadi
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    //memberNick ni kiritib olamiz
    memberNick: {
      // <String> javasc grup type bor ushnandan kelyapti
      //moongose typesc ni tushunmaydi
      type: String,
      // Uniqe sharti bu bitta memberNick bir kishiga tegishli bolishi kk
      //
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPhone: {
      type: String,
      //yani telefon raqamni boshqa odam ishlatmasligi uchun unique qoyamiz
      index: { unique: true, sparse: true },
      //required: true, bu telefon raqamni kiritish majburyati
      required: true,
    },

    memberPassword: {
      type: String,
      //databse bydefult olib bermasligi uchun false
      select: false,
      required: true,
    },

    memberAddress: {
      type: String,
    },

    memberDesc: {
      type: String,
    },

    memberImage: {
      type: String,
    },

    memberPoints: {
      type: Number,
      default: 0,
    },
    //va bizga timestamp kk boladi
  },
  { timestamps: true } //update va create qilish uchun
);
// schema modulega aylantitib olamiz endi
export default mongoose.model("Member", memberSchema);

//memberSchema; databaseda collection yaratib beryapti faqat koplikda
