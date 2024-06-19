import { LoginInput } from "./../libs/types/member";
import { Request, Response } from "express";
//shunaqa qisak T interface ni qolga olib beradi
import { T } from "../libs/types/common";
//(model, memberService) import qilib olamiz
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

//1. <memberController> objectini xosil qilib olamiz
//va uning ichiga turli xil mrthodalni kiritamiz
// methodalr nomlari turli xil bolishi mn va maxsus bir type xosil qilamiz
// va <scr> ichida <libs> degan folder ochamiz
// va biz common.ts dagi <T> typeni kiritamiz
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("goHome");
    res.render("home");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

//router <"/login"> dan kelyapti
restaurantController.getLogin = (req: Request, res: Response) => {
  //asosan Request va Response kirib kelganda try catch ishlatialdi
  // va malum bir mantiqlar kritiladi
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};


//signup uchun methodni qurib olamiz han get ham post methodlari, bu yer define qismi
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    //enum ichidan mavjud bolgan qiymat
    newMember.memberType = MemberType.RESTAURANT;
    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    //error osilib qolmasligi uchun shuni kiritamiz yani bir xil nom bn kiritganimizda
    res.send(err);
  }
};

//post uchun methodni qurib olamiz
//processLogin defin quramiz
restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("processLogin");
    //req.body dan qanday malumot keloyhanai tekshiramiz
    console.log("body:", req.body);
    // yangi input nomli yangi variable xoil qilamiz
    // type ni LoginInput deb belgilaymiz
    const input: LoginInput = req.body;

    //Yangi instns hosil qilamiz
    const memberService = new MemberService();
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, getSignup:", err);
    res.send(err);
  }
};


//4. <memberController> routerda chaqirib olish uchun export qilib olamiz
export default restaurantController;
