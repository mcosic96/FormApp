var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const saveData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new PrismaClient();
    const { firstName, lastName, address, phone, email } = data;
    const result = yield prisma.formData.create({
        data: {
            firstName,
            lastName,
            address,
            phone,
            email
        }
    });
    return result;
});
export default saveData;
//# sourceMappingURL=formData.service.js.map