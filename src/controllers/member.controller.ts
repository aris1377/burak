//biz controllerlarni doim objectlar orqali xosil qilamiz.

// router.ts dan kelyapti
import { Request, Response } from "express";

//2 import qilib olamiz
//shunaqa qisak T interface ni qolga olib beradi
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("signup");
    const input: MemberInput = req.body,
          result: Member = await memberService.signup(input);
      //Tokens

    res.json({ member: result });
  } catch (err) {
    console.log("Error, signup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    //error osilib qolmasligi uchun shuni kiritamiz yani bir xil nom bn kiritganimizda
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    //Tokens and password

    res.json({ member: result });
  } catch (err) {
    console.log("Error, login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    //error osilib qolmasligi uchun shuni kiritamiz yani bir xil nom bn kiritganimizda
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
//4. <memberController> routerda chaqirib olish uchun export qilib olamiz
export default memberController;
