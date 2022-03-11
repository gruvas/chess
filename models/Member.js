const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    full_name: {type: String}, // ФИО
    age: {type: Number}, // Возраст
    rank: {type: String}, // Разряд
    team: {type: Number}, // Номер команды
    player_board: {type: Number}, // Доска на которой играет участник
    player_number: {type: Number}, // Номер игрока
    number_wins: {type: Number, default: 0}, // Количество побед
    number_draws: {type: Number, default: 0}, // Количество ничей
    number_lesions: {type: Number, default: 0}, // Количество поражений
    score: {type: Number, default: 0}, // Общий счет
    color_coef: {type: Number, default: 0}, // Коэф. цвета
    rivals: {type: Array}, // Отвечает за каждый матч,
    //  записывает номер партии, номер игрока, цвет, результат
    owner: {type: Types.ObjectId, ref: "Tournament"} // Ссылка на турнир
})

module.exports = model('Member', schema)