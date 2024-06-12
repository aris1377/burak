import { MemberType } from "../libs/enums/member.enum";
import { Member } from "./../libs/types/member";
import MemberModel from "../schema/Member.model";
import { MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";

// schema va service modellarimizni har doim class lar orqali quramiz
class MemberService {
  //propety kk boaldi
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }
  //yangi method hosil qilamiz
  // methodimiz async method bolmasa promise ishlatmaymiz
  //processSignup ni defenition qismini tashkillshtirib olamiz
  public async processSignup(input: MemberInput): Promise<Member> {
    //faqat bitta restaran kiritilish uchun mantiq yozamiz
    const exist = await this.memberModel
      .findOne({
        memberType: MemberType.RESTAURANT,
      })
      .exec();
    console.log("exist:", exist);
    //shart kiirtamiz
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    //ozimini errorlarni ishlaitishimiz

    try {
      //burak restoranizni boshlaymiz
      //memberModel - class
      //create - static method
      //input ni qoysak burak restaranimizni databasega borib xosil qilib
      //javobini resultga qaytaradi
      const result = await this.memberModel.create(input);
      //memberPassword response da qatnashmasligi uchun
      result.memberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }

    //classdan instance qilib olish yoli bn qilib koramiz
    //tempResult degan variable xosil qilamiz
    //this.memberModel classidan instance olamiz
    // va constuctoriga inputni pass qilamiz
    // const tempResult = new this.memberModel(input);
    //va bizga kerakli bolgan reultni tempResultning asyc methodi bolmish save ni ishlatamiz
    // const result = await tempResult.save();

    //memberPassword response da qatnashmasligi uchun
  }
}
export default MemberService;
