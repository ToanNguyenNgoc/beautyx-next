const mongoose = require("mongoose");

const BannersCampaign = mongoose.model(
    "BannersCampaign",
    new mongoose.Schema({
        id: {
            type: Number,
            required: true,
            index: true
        },
        title: String,
        image_url: String,
        result_type: String,
        special: Boolean,
        special_min_price: Number,
        special_max_price: Number,
        discount_percent: Number,
        created_at: { type: Date, default: Date.now }
    })
)

module.exports = BannersCampaign