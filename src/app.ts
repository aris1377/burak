//1 Express ni ornatib olamiz va axpress typni ornatib olamiz
//npm i express@4.17.3, npm i express@4.17.3 -D

//2 Express ni integratsiyasini amalga oshiramiz
import express from "express";
//path ni import qilib olamiz. Bu mongoDB ni core package
import path from "path";
//expressni 4 ta bolimi mavjud
//1--ENTRANCE (kirish qismi)
// EXPRESS ni chaqirib olamiz
const app = express();
//5*(router)-ROUTES ni chaqirib olamiz
import router from "./router";
//router adminni import qilib olamiz(restaurantController)
import routerAdmin from "./router-admin"
//moorganni import qilib olamiz
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
});

//1-- ENTRANCE (kirish)
app.use(express.static(path.join(__dirname, "public")));

//bu <form> lardan malumot kesa kegan malumotlarni oqib beradi
//inputdan kelaotgan malumotlarni yani frotdan backendga jonatilyotgan malumotlarni oqib beradi
app.use(express.urlencoded({ extended: true }));

//rest api sifatida request bolayotgan datalarini yani bodysida keloytgan jyson datalarni otkazishga ruxsat beryapmiz
app.use(express.json());

//morganni middlevere integration qilamiz
app.use(morgan(MORGAN_FORMAT));

//2--SESSIONS
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6,
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);


//3-- VIEWS
// expressni set qilamiz
//yani express app imizda <views> sifatida ejs ni ishlatishni aytamiz
// <path.join> qilib <__dirname> ni qabul qilib olib <views> folderiga yetaklaymiz
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//src folderini ichida views folderini yasab olamiz

//4--ROUTES
//6*(router)Kelayotgan zaproslarni routerga yuborishini takidlaymiz
//middleware pettern - sababi <"/"> slashdan kelayotgan requestlarni router folderimizga yonaltiryapti
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // SPA: REACT//bu desgin pettern middleware deyiladi

//4 appni ishga tushurish uchun export qillib olishimiz kerak
//5 server.ts da uni import qilib olamiz
export default app;
