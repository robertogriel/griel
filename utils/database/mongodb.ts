import mongoose, { Model, Schema } from "mongoose"

const { MONGODB_URL } = process.env;

export const connect = async ()=>{

    const conn = await mongoose.connect(MONGODB_URL as string).catch((err)=>console.error(err))

    console.log('Mongoose connected')

    const MenuSchema = new Schema({
        _id: String,
        href: String,
        icon: String,
        alt: String,
        strong: String,
        small: String
    })

    const List = mongoose.models.List || mongoose.model('Menu', MenuSchema, 'list')

    return { conn, List }

}
