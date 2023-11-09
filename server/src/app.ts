import express from "express";
import cors from "cors";
import Controller from "./types/controller.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

class App {
  private app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  public appListen() {
    this.app.listen(process.env.PORT || 8000, () => {
      console.log(`App listening on the port ${process.env.PORT || 8000}`);
    });
  }
}

export default App;
