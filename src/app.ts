import express from "express";
import path from "path";
const app = express();
import router from "./router";
import routerAdmin from "./router-admin"
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

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
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
})
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
