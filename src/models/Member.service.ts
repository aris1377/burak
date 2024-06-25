import { MemberType } from "../libs/enums/member.enum";
import { LoginInput, Member } from "./../libs/types/member";
import MemberModel from "../schema/Member.model";
import { MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import * as bcrypt from "bcryptjs";
// schema va service modellarimizni har doim class lar orqali quramiz
class MemberService {
  //propety kk boaldi
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }

  /**SPA */
  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      //memberPassword response da qatnashmasligi uchun
      result.memberPassword = "";
      return result as Member;
    } catch (err) {
      console.error("Error, model:signup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMEBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    // const isMatch = input.memberPassword === member.memberPassword;
    if (!isMatch) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.WRONG_PASSWORD);
    }
    return (await this.memberModel.findById(member._id).exec()) as Member;
  }

  /** SSR */
  public async processSignup(input: MemberInput): Promise<Member> {
    //faqat bitta restaran kiritilish uchun mantiq yozamiz
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    //shart kiirtamiz
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    //ozimini errorlarni ishlaitishimiz
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      //memberPassword response da qatnashmasligi uchun
      result.memberPassword = "";
      console.log("result:", result);
      return result as Member;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMEBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    // const isMatch = input.memberPassword === member.memberPassword;
    if (!isMatch) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.WRONG_PASSWORD);
    }
    return (await this.memberModel
      .findById(member._id)
      .lean()
      .exec()) as Member;
  }
}
export default MemberService;
