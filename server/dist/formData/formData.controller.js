var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
class FormDataController {
    constructor(formDataService) {
        this.formDataService = formDataService;
        this.path = "/formData";
        this.router = Router();
        this.saveFormData = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.formDataService.saveToDatabase(request.body);
                return response.json(result);
            }
            catch (err) {
                next(err);
            }
        });
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(this.path, this.saveFormData);
    }
}
export default FormDataController;
//# sourceMappingURL=formData.controller.js.map