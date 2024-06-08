//1. Express ni chaqirib olamiz
//express package ichidan express ni chaqirib olamiz
// import express from 'express';
// import express, { Request, Response } from "express";

//memberController dan olayotganimiz uchun request va response ochirib yubordik
import express from "express";

//2. Router variable ni xosil qilamiz va express dan foydalanamiz, bizga aytilganidek doc da <ROUTER> variable ni chaqirib olamiz.
const router = express.Router();

//5*(memberController) import qilib olamiz
import memberController from './controllers/member.controller';

//3. Endi Router instensdan foydalanib <get>, <post> va qolgan methodlarni amalga oshirishimiz mumkin
// get methodidan foydalanamiz va rout path ni xosil qilamiz
// <get> method hisoblanadi,  <'/'> bu Api urli xisoblamadi
//request va response mi 1* express ni ichidan qabul qilib olamiz
// router.get("/", (req: Request, res: Response) => {
//   //oddiy response qaytaramiz
//   res.send("Home Page");
// });

//6*memberController.goHome methodini chaqiramiz
router.get("/",memberController.goHome);

//Login page
// router.get("/login", (req: Request, res: Response) => {
//   //oddiy response qaytaramiz
//   res.send("Login Page");
// });

//7*memberController.getLogin methodini chaqiramiz
router.get("/login", memberController.getLogin);

//SignUp page
// router.get("/signup", (req: Request, res: Response) => {
//   //oddiy response qaytaramiz
//   res.send("Signup Page");
// });

//7*memberController.getsignup methodini chaqiramiz
router.get("/signup", memberController.getSignup);

//4. Roiterlarni ApiTS ga export qilamiz
export default router;
