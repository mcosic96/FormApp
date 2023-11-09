var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import HttpException from "../exceptions/HttpException.js";
class FormDataService {
    constructor(prisma) {
        this.prisma = prisma;
        this.saveToDatabase = (formData) => __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, address, phone, email } = formData;
            const result = yield this.prisma.formData.create({
                data: {
                    firstName,
                    lastName,
                    address,
                    phone,
                    email,
                },
            });
            if (!result) {
                throw new HttpException(500, "Error while creating user.");
            }
            return result;
        });
    }
}
export default FormDataService;
//# sourceMappingURL=formData.service.js.map