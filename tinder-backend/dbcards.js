import mongoose from 'mongoose'


//this is used to fill the database
const cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String
})

export default mongoose.model('cards',cardSchema);