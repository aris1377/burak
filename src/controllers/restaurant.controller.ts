//biz controllerlarni doim objectlar orqali xosil qilamiz.

// router.ts dan kelyapti
import { Request, Response } from "express";

//2 import qilib olamiz
//shunaqa qisak T interface ni qolga olib beradi
import { T } from "../libs/types/common";

//(model, memberService) import qilib olamiz
import MemberService from "../models/Member.service";

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

//4. <memberController> routerda chaqirib olish uchun export qilib olamiz
export default restaurantController;
