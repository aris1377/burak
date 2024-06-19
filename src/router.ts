
//memberController dan olayotganimiz uchun request va response ochirib yubordik
import express from "express";

//2. Router variable ni xosil qilamiz va express dan foydalanamiz, bizga aytilganidek doc da <ROUTER> variable ni chaqirib olamiz.
const router = express.Router();

//5*(memberController) import qilib olamiz
import memberController from './controllers/member.controller';

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);
  

export default router;
