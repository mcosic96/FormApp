import express from "express";
import cors from "cors";
import formDataRouter from "./routes/formData.route.js";
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(formDataRouter);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map