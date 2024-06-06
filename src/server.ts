// dotenv package ichidan <dotenv> ni cha1irib berishni sorayapmiz
import dotenv from "dotenv";

//documentionga qarasak <dotenv> ni <config> degan methodi mavjud va usha <config> methodini excuit qilyapmiz
//biz dotenv varibillarni intragatsiyalini amalga oshirdik
dotenv.config();

//togri ishlayotganini tekshrish uchun
//PROSSES ENV ichidan PORT ni charib olamiz
// console.log("PORT:", process.env.PORT);
//yani bizni .ENV  variabllar ichidan DOTENV oqishga imkon hosil qildi

//MONGO_URL ni test qilib olamiz
// console.log("MONGO_URL:", process.env.MONGO_URL);