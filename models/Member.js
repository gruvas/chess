const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    full_name: {type: String},
    age: {type: Number},
    rank: {type: String},
    team: {type: Number},
    player_board: {type: Number},
    player_number: {type: Number},
    number_wins: {type: Number, default: 0},
    number_lesions: {type: Number, default: 0},
    owner: {type: Types.ObjectId, ref: "User"}
})

module.exports = model('Member', schema)