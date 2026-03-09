const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    address:String,
    city:String,
    phone:String
});

export const restaurantSchema = mongoose.models.restaurants || mongoose.model('restaurants',restaurantModel)