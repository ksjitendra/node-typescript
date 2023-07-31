import express, {Request, Response} from "express";
import { homedetails } from "../controllers/user";
const router = express.Router();

router.get("/home",homedetails )

router.get("/about", (req:Request, resp:Response) => {
    resp.json({
        message: "About Page"
    })
})

export {
    router
}