import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { createTransaction } from "../schemas/validation/createTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware)

transactionRouter.post(
    "/", 
    validationSchemaMiddleware(createTransaction),
    transactionController.create
);

transactionRouter.get(
    '/',    
    transactionController.findAllByUser
);

transactionRouter.put(
    '/:id', 
    transactionController.update
);

transactionRouter.delete(
    '/:id', 
    transactionController.delete
);




export default transactionRouter;