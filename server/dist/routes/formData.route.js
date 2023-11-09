import { Router } from "express";
import { saveToDatabase } from "../controllers/formData.controller.js";
const router = Router();
router.post('/formData', saveToDatabase);
export default router;
//# sourceMappingURL=formData.route.js.map