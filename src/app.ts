//1 Express ni ornatib olamiz
//2 Express ni integratsiyasini amalga oshiramiz
import express from "express";

//path ni import qilib olamiz. Bu mongoDB ni core package
import path from "path";

//expressni 4 ta bolimi mavjud
//1--ENTRANCE (kirish qismi)
const app = express();

//dirname ni qiymatini tekshirib olamiz va bizga ushbu qiymatini beradi
//dirname: C:\Users\bek77\Desktop\Burak\src
// console.log("dirname:", __dirname);

//3. middleverblarni integratsiyasini amalga oshiramiz 
//<App>ni < use > degan methodini chaqiramiz
//bu middleverb pettern hisoblanadi
//<(__dirname, "public"> nu narsa bizga static folderga aylantirib beradi
app.use(express.static(path.join(__dirname, "public")));
//bu <form> lardan malumot kesa kegan malumotlarni oqib beradi
//inputdan kelaotgan malumotlarni yani frotdan backendga jonatilyotgan malumotlarni oqib beradi
app.use(express.urlencoded({ extended: true }));
//rest api sifatida request bolayotgan datalarini yani bodysida keloytgan datalarni otkazishga ruxsat beryapmiz
app.use(express.json());

//2--SESSIONS

//3-- VIEWS
// expressni set qilamiz
//yani express app imizda <views> sifatida ejs ni ishlatishni aytamiz
// <path.join> qilib <__dirname> ni qabul qilib olib <views> folderiga yetaklaymiz
app.set("views", path.join(__dirname, "views"));
//bizning <wiew> engine miz aynan <ejs> eganligini qayt etamiz
app.set("view engine", "ejs");
//src folderini ichida views folderini yasab olamiz

//4--ROUTES

//4 appni ishga tushurish uchun export qillib olishimiz kerak
//5 server.ts da uni import qilib olamiz
export default app;
