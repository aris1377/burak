
//memberController dan olayotganimiz uchun request va response ochirib yubordik
import express from "express";

//2. Router variable ni xosil qilamiz va express dan foydalanamiz, bizga aytilganidek doc da <ROUTER> variable ni chaqirib olamiz.
const routerAdmin = express.Router();

//5*(memberController) import qilib olamiz
import restaurantController from "./controllers/restaurant.controller";



/** Restaurant*/
//6*memberController.goHome methodini chaqiramiz
routerAdmin.get("/", restaurantController.goHome);
//7*memberController.getLogin methodini chaqiramiz
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

//7*memberController.getsignup methodini chaqiramiz
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/**Product */
/**User */

//4. Roiterlarni ApiTS ga export qilamiz
export default routerAdmin;


