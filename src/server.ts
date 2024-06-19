//1. dotenv package ichidan <dotenv> ni cha1irib berishni sorayapmiz
import dotenv from "dotenv";

//2. documentionga qarasak <dotenv> ni <config> degan methodi mavjud va usha <config> methodini excuit qilyapmiz
//biz dotenv varibillarni intragatsiyalini amalga oshirdik
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongDB connection succeed");

    const PORT = process.env.PORT ?? 3003;
    //app ni listen qilamiz
    app.listen(PORT, () => {
      console.info(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin\n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongDB", err));
