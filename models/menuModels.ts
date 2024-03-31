import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const MenuSchema = new Schema({
    _id: String,
    href: String,
    icon: String,
    alt: String,
    strong: String,
    small: String
})

export default models.MenuSchema || model('Menu', MenuSchema)