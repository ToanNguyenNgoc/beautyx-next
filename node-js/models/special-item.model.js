const mongoose = require("mongoose");

const SpecialItemSchema = new mongoose.Schema({
    id: String,
    item_id: String,
    type: String,
    name: String,
    image_url: String,
    organization_id: String,
    special_price: Number,
    price: Number,
})
module.exports = mongoose.model.SpecialItem || mongoose.model('SpecialItem', SpecialItemSchema)