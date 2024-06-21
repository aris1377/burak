//memberController dan olayotganimiz uchun request va response ochirib yubordik
import express from "express";

//2. Router variable ni xosil qilamiz va express dan foydalanamiz, bizga aytilganidek doc da <ROUTER> variable ni chaqirib olamiz.
const routerAdmin = express.Router();

//5*(memberController) import qilib olamiz
import restaurantController from "./controllers/restaurant.controller";
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

//7*memberController.getsignup methodini chaqiramiz
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

//4. Roiterlarni ApiTS ga export qilamiz
export default routerAdmin;
