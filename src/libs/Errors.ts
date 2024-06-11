// bu yerda enum va inheretance bilan ishlaymiz
export enum HttpCode {
  //eng kop uchraydigan http kodlar
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FOUND = "No data is found!",
  CREATE_FAILED = "Create is failed!",
  UPDATE_FAILED = "Update is failed!",
}
//inheritance bilan ishlaymiz
//error lar classi xosil qilamiz
//javascript ichida build qilingan errorlarga extend bolsin diyapmiz
class Errors extends Error {
  //2 ta property beriladi
  // code yuqoridagi enumni qabul qiladi
  public code: HttpCode;
  // message yuqoridagi message qabul qiladi
  public message: Message;

  //erprni hozil qilishda statuscode ni beramiz va kodimiz Http codedan bolishi kk
  //statusMessage beramiz type message boladi
  constructor(statusCode: HttpCode, statusMessage: Message) {
    //superclassga tegishli malumotlarni yozamiiz
    super();
    // va yuqorida ishlargan 2 ta propertyni olamiz
    //code ni statusCode ga tenglaymiz
    this.code = statusCode;
    //message ni messagega tenglaymiz
    this.message = statusMessage;
  }
}

//export qilib olamiz
//bularni biz sugnup va login qisimida aniq tishunib olamiz
export default Errors;
