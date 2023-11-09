import { Router } from "express";
class RoutesController {
    constructor() {
        this.path = "/routes";
        this.router = Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/formData");
    }
}
export default RoutesController;
//# sourceMappingURL=routes.controller.js.map