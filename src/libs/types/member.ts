import { ObjectId } from "mongoose";

import { MemberStatus, MemberType } from "../enums/member.enum";
//database qaytyotgan doc uchun yangi bir interface xosil qilamiz

export interface Member {
    //database dan kelayotgan malumot bolganligi uchun defulti.user bolganligi uchun
  //memberType VA memberSatusi doim mavjud boldi.
  
  //database dan kelayotgaN ID
  _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus;
    //postmandan kelyapti
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
}
// yangi interfase xosil qilamiz
export interface MemberInput {
  //optional bolgan typelar
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  //postmandan kelyapti
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}

// demak menber interface databasedan qaytyotgan malumot uchun biriktiligan type xisoblanadi
