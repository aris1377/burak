//1. dotenv package ichidan <dotenv> ni cha1irib berishni sorayapmiz
import dotenv from "dotenv";

//2. documentionga qarasak <dotenv> ni <config> degan methodi mavjud va usha <config> methodini excuit qilyapmiz
//biz dotenv varibillarni intragatsiyalini amalga oshirdik
dotenv.config();

//3. togri ishlayotganini tekshrish uchun
//PROSSES ENV ichidan PORT ni charib olamiz
// console.log("PORT:", process.env.PORT);
//yani bizni .ENV  variabllar ichidan DOTENV oqishga imkon hosil qildi

//4. MONGO_URL ni test qilib olamiz
//console.log("MONGO_URL:", process.env.MONGO_URL);

//DATABASE KETMA-KETLIGI
//CLUSTER => DATABASE => COLLECTION => DOCUMENTS

//5. mongoose orqali mongoDbha ulanamiz
//moongoe package ichidan mongoose ni charib olamiz
import mongoose from "mongoose";

//6. Documentionda aytilgandek connect qilamiz
// va connect ichiga url kiritamiz va doteenvdan qabul qilib olamiz,
//Mongo_urlni <as string> orqali string ekanligini belgilab olamiz
//then - agar mongodbga connection(ulanish) yaxshi amalga oshsa <then></then> ishga tushadi
//catch - agar ulanishda muommo bosa <cath> orqali error boladi
mongoose
  .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongDB connection succeed");
        //7. portni belgilab ketamiz
        //<prosses.env> ni ichidan <PORT> ni qabul qilib olamiz
        //agar port mavjuda bolmasa <??> orqali <3003> ni Portni tanla deb korsatib ketamiz
        const PORT = process.env.PORT ?? 3003;
    })
    //biz hamma malumotni <env> ichian olyapmiz yani PORT VA URL larni
  .catch(err => console.log("ERROR on connection MongDB", err));
