import { MemberType } from "../libs/enums/member.enum";
import { LoginInput, Member } from "./../libs/types/member";
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

    //memberPassword response da qatnashmasligi uchun
  }

  //Yangi instns hosil qilamiz
  // Bu MemberService dan hosil qilingan object xisoblanadi
  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMEBER_NICK);

    const isMatch = input.memberPassword === member.memberPassword;
    if (!isMatch) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.WRONG_PASSWORD);
    }
    return await this.memberModel.findById(member._id).exec();
  }
}
export default MemberService;
