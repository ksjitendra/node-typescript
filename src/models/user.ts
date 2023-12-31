import mongoose, { Schema, model, Document }  from "mongoose"

export interface UserDocument extends Document {
    name: string, 
    dept: string
}

interface User {
    name: string, 
    dept: string
}

const schema = new Schema<User>({
    name: {
        type:String, 
        required: true 
    }, 
    dept: {
        type:String, 
        required: true 
    }
})

const UserModel = model<User>('user', schema)
export default UserModel;   