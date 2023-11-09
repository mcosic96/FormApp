var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import saveData from "../services/formData.service.js";
export function saveToDatabase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.json(yield saveData(req.body));
        }
        catch (err) {
            return res.status(400).send({ message: err });
        }
        return res.status(201);
    });
}
;
//# sourceMappingURL=formData.controller.js.map