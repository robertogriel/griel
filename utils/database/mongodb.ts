import mongoose, { Schema } from "mongoose"

const { MONGODB_URL } = process.env;

export const connect = async ()=>{

    const conn = await mongoose.connect(MONGODB_URL as string).catch((err)=>console.error(err))

    console.log('Mongoose connected');

    const MenuSchema = new Schema({
        _id: String,
        href: String,
        icon: String,
        alt: String,
        strong: String,
        small: String
    });

    const CertificateSchema = new Schema({
        _id: String,
        name: String,
        image: String
    });

    const MenuList = mongoose.models.Menu || mongoose.model('Menu', MenuSchema, 'menu');
    
    const CertificateList = mongoose.models.Certificates || mongoose.model('Certificates', CertificateSchema, 'certificates');

    return { conn, MenuList, CertificateList }

}
