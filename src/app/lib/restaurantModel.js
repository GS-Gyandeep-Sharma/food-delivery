const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
     name:String
});

export const restaurantSchema = mongoose.models.food_delivery || mongoose.model('food_delivery',restaurantModel)