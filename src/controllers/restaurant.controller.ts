import { LoginInput } from "./../libs/types/member";
//biz controllerlarni doim objectlar orqali xosil qilamiz.

// router.ts dan kelyapti
import { Request, Response } from "express";

//2 import qilib olamiz
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

//3. <memberController> objectini ichida bir qator methodni qurib olamiz
// router <"/"> dan kelyapti
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};
//router <"/login"> dan kelyapti
restaurantController.getLogin = (req: Request, res: Response) => {
  //asosan Request va Response kirib kelganda try catch ishlatialdi
  // va malum bir mantiqlar kritiladi
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};
//router <"/signup"> dan kelyapti
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
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
//signup uchun methodni qurib olamiz han get ham post methodlari, bu yer define qismi
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    //qoyishdan sabab shunga qadar hech qanday muommo bolmagini tekshirish
    console.log("processSignup");

    //newMember ochib olamiz
    //type ni shakkilantitb olishimi kk
    //va type ni memberinput deb belgilab olamiz <member.ts> ichidan
    const newMember: MemberInput = req.body;
    //enum ichidan mavjud bolgan qiymat
    newMember.memberType = MemberType.RESTAURANT;

    //servismodelni ishlatishni boshlaymiz
    //variable ni member clasimiz orqali hosil qilamiz
    //classimizdan instns olibb memberService ga tenglashtiryapmiz
    const memberService = new MemberService();
    //memberService methodini chaqirib olamiz
    //xosil bolgan objectni ishlatish mumkin
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    //error osilib qolmasligi uchun shuni kiritamiz yani bir xil nom bn kiritganimizda
    res.send(err);
  }
};

//4. <memberController> routerda chaqirib olish uchun export qilib olamiz
export default restaurantController;
