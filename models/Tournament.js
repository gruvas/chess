const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name_tour: {type: String}, // Название турнира
  organizer: {type: String}, // Организатор
  type_tournament: {type: String, default: 'Швейцарская'}, // Пример: Швейцарская система
  type_game: {type: String}, //Один на один или команой на команду
  finished_tournament: {type: Boolean, default: false}, //Завершен или не завершен
  date_beginning: {type: String}, // Дата начала
  date_expiration: {type: String}, // Дата окончания
  participants_number: {type: Number},// В режиме 1 vs 1 указывается
  // общее количество учатников, в режиме команда на команду
  // указывается количество игроков в одной команде
  teams_number: {type: Number}, // Количество команд
  tours_number: {type: Number}, // Количество туров
  time_tour: {type: Number}, // Время одной игры
  time_type_tour: {type: String}, // Тип времени
  current_tour: {type: String, default: 1}, // Текущий тур
  place: {type: Array}, // Места занятые в турнире
// (1 место занял ФИО (и так каждое место))
// (пример массива:
//   full_name: 'test',
//   индекс: 3,
//   место: 1
// )
  owner: {type: Types.ObjectId, ref: "User"},
  links: [{ type: Types.ObjectId, ref: 'Member' }]
})

module.exports = model('Tournament', schema)