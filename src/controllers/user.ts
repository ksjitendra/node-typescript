
import express, {Request, Response} from "express";
import UserModel from "../models/user";
    
const homedetails = async (req:Request, res:Response) => {

    let userData = await UserModel.find()

    const data = sumdata(2,3)
    let obj = {
        x:12, 
        y:13
    }
    const data2  = addData(obj)
    res.json({      
        message: "This from users controller", 
        data2,
        userData
    })

}

interface params  {
    x:number;
    y:number
}

const sumdata = (x:number,y:number) => {
    return x+y
}   

type addCheck = (r:params) => number

const addData:addCheck = (obj: params) => {

    return obj.x+obj.y

}

export {homedetails}