//1. Express ni chaqirib olamiz
//express package ichidan express ni chaqirib olamiz
// import express from 'express';
// import express, { Request, Response } from "express";

//memberController dan olayotganimiz uchun request va response ochirib yubordik
import express from "express";

//2. Router variable ni xosil qilamiz va express dan foydalanamiz, bizga aytilganidek doc da <ROUTER> variable ni chaqirib olamiz.
const routerAdmin = express.Router();

//5*(memberController) import qilib olamiz
import restaurantController from "./controllers/restaurant.controller";

//3. Endi Router instensdan foydalanib <get>, <post> va qolgan methodlarni amalga oshirishimiz mumkin
// get methodidan foydalanamiz va rout path ni xosil qilamiz
// <get> method hisoblanadi,  <'/'> bu Api urli xisoblamadi
//request va response mi 1* express ni ichidan qabul qilib olamiz
// router.get("/", (req: Request, res: Response) => {
//   //oddiy response qaytaramiz
//   res.send("Home Page");
// });

/** Restaurant*/
//6*memberController.goHome methodini chaqiramiz
routerAdmin.get("/", restaurantController.goHome);

//Login page
// router.get("/login", (req: Request, res: Response) => {
//   //oddiy response qaytaramiz
//   res.send("Login Page");
// });

//7*memberController.getLogin methodini chaqiramiz
routerAdmin
  .get("/login", restaurantController.getLogin)
  //post methodidan misol qilib koramiz
  //processLogin call qasmi
  .post("/login", restaurantController.processLogin);

//SignUp page
// router.get("/signup", (req: Request, res: Response) => {
//   //oddiy response qaytaramiz
//   res.send("Signup Page");
// });

//7*memberController.getsignup methodini chaqiramiz
routerAdmin
  .get("/signup", restaurantController.getSignup)
  //processSigup call qasmi
  .post("/signup", restaurantController.processSignup);

/**Product */
/**User */

//4. Roiterlarni ApiTS ga export qilamiz
export default routerAdmin;
