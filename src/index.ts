import express, {Request, Response} from "express";
const app = express()
import { router } from "./routes/routes"
import connects from "./config/config";

const port = 3000

app.use('/', router)    

connects()

app.get("/test", (req: Request, res: Response):void => {

    res.status(200).json({  
        data: "This is test string"
    })

})

app.listen(port, ():void=> {
    console.log('Server is running');
    
})