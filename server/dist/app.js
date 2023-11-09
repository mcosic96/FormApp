import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/errorMiddleware.js";
class App {
    constructor(controllers) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }
    initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }
    appListen() {
        this.app.listen(process.env.PORT || 8000, () => {
            console.log(`App listening on the port ${process.env.PORT || 8000}`);
        });
    }
}
export default App;
//# sourceMappingURL=app.js.map