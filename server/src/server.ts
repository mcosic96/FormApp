import App from "./app.js";
import PrismaService from "./services/prismaService.js";
import FormDataController from "./formData/formData.controller.js";
import FormDataService from "./formData/formData.service.js";

const app = new App([
  new FormDataController(new FormDataService(PrismaService.getPrisma())),
]);
app.appListen();
