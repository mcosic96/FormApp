import { type Request, type Response, Router, NextFunction } from "express";
import FormDataService from "./formData.service.js";

class FormDataController {
  readonly path = "/formData";
  readonly router = Router();

  constructor(private readonly formDataService: FormDataService) {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(this.path, this.saveFormData);
  }

  private saveFormData = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.formDataService.saveToDatabase(request.body);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default FormDataController;
