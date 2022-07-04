const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    full_name: {type: String}, // ФИО
    age: {type: Number}, // Возраст
    rank: {type: String}, // Разряд
    team: {type: Number}, // Номер команды
    player_board: {type: Number}, // Доска на которой играет участник
    player_number: {type: Number}, // Номер игрока
    score: {type: Number, default: 0}, // Общий счет
    rivals: {type: Array}, // Отвечает за каждый матч,
    //  записывает номер партии, номер игрока, цвет, результат
    owner: {type: Types.ObjectId, ref: "Tournament"} // Ссылка на турнир
})

module.exports = model('Member', schema)