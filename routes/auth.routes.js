const {Router} = require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const router = Router()
const User = require('../models/User')
const Member = require('../models/Member')
const Tournament = require('../models/Tournament')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post('/register', 
    [
        // check('email', 'Некорректный email').isEmail(),
        check('email', 'Некорректный email'),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({min: 6})
    ],
    async(req, res) => {
        try{
            console.log('Body: ', req.body)
            // console.log('Body: ', req.status)

            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if(candidate){
                return res.status(400).json({message: 'Такой пользователь уже существует'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hashedPassword})

            await user.save()

            res.status(201).json({message: 'Пользователь создан'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

// /api/auth/register
router.post('/login',
    [
        // Вносил изменения мб нижняя закоментированная строка исправит баг
        // check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        // check('email', 'Введите корректный email').normalizeEmail(),
        check('email', 'Введите корректный email'),
        check('password', 'Введите пароль').exists()
    ],
    async(req, res) => {
        try{
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email})

            if(!user){
                return res.status(400).json({message: 'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id})

        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post('/delete_tour',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {tour_id} = req.body

            await Tournament.deleteOne({_id: tour_id})

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)
router.post('/delete_memeber',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {tour_id} = req.body

            await Member.deleteMany({owner: tour_id})

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post('/user_delete_link',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {user_id, tournament_id} = req.body

            const asda = await User.updateOne(
                {_id: user_id},

                {$pull:
                    {links: {$eq: tournament_id}}
                }
            )
                console.log(asda)
            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)












//Working with tournaments
router.post('/create_tour',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            // const {full_name, age, owner: owner} = req.body
            const {owner: owner} = req.body


            // localStorage.setItem('tornament', owner)
            // const {owner: owner} = req.body

            // const tournament = new Tournament({name_tour: full_name, owner: owner})
            const tournament = new Tournament({owner: owner})

            tournament.save(function(err, room) {
                tournament_id = room.id
                console.log(tournament_id)
                console.log(typeof tournament_id)
            })

            let id = mongoose.Types.ObjectId(owner)

            await User.updateOne(
                {id},
                { $push: { links: tournament.id }}
            )

            res.status(201).json({message: 'Добавление прошло успешно', id: tournament.id})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)


router.post('/type_tournament',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {id, type_tournament} = req.body

            await Tournament.updateOne({_id: id}, {type_tournament: type_tournament})

            res.status(201).json({message: 'Added tournament type'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post('/type_game',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {id, type_game} = req.body

            await Tournament.updateOne({_id: id}, {type_game: type_game})

            res.status(201).json({message: 'Added game type'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)
router.post('/current_tour',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {id, current_tour} = req.body

            await Tournament.updateOne({_id: id}, {current_tour: current_tour})

            res.status(201).json({message: 'Tournament updated '})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post('/main_characteristics',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {
                id, name_tour, organizer,
                time_tour, time_type_tour,
                tours_number,
                participants_number, teams_number,
                date_beginning, date_expiration
            } = req.body

            await Tournament.updateOne({_id: id}, 
                {name_tour: name_tour, organizer: organizer,
                time_tour: time_tour, time_type_tour: time_type_tour,
                tours_number: tours_number,
                participants_number: participants_number, teams_number: teams_number,
                date_beginning: date_beginning, date_expiration: date_expiration})

            res.status(201).json({message: 'Added game type'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

//Test add arr
router.post('/addMember',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)
            let intermediate = Object.values(req.body)

            const {owner} = req.body[0]

            await Member.deleteMany({owner})

            Member.insertMany(intermediate)

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post('/tournamentLinks',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {arr_id, link_tournament} = req.body

            await Tournament.updateOne({_id: link_tournament}, { links: [] })
            await Tournament.updateOne({_id: link_tournament}, { $push: {links: arr_id} })

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)





router.post('/tournamentData',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {id_tournament} = req.body
            const tournament_data = await Tournament.findOne({_id: id_tournament})
            console.log(tournament_data)
            
            res.json({tournament_data})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post('/memberData',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {id} = req.body

            const member_data = await Member.find({owner: id})

            res.json({tournament_data: member_data})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)


router.post('/tournamentData_many',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {tournament_id} = req.body

            const tournament_data = await Tournament.find({owner: tournament_id})

            res.json({tournament_data})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)


router.post('/add_member',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)
            let intermediate = Object.values(req.body)

            Member.insertMany(intermediate)

            res.status(201).json({message: 'Обновление'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)


// console.log('Body: ', req.body)
// let intermediate = Object.values(req.body)

// const {owner} = req.body[0]

// await Member.deleteMany({owner})

// Member.insertMany(intermediate)












//Test add arr
router.post('/test_addMember',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            let qw3 = Object.values(req.body)
            Member.insertMany(qw3)

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)


// var member_id
router.post('/adding_member',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {full_name, age, owner: owner} = req.body

            const member = new Member({full_name: full_name, age: age, owner: owner})

            member.save(function(err, room) {
                member_id = room.id
                console.log(member_id)
                console.log(typeof member_id)
            })

            let id = mongoose.Types.ObjectId(owner)

            await User.updateOne(
                {id},
                { $push: { links: member.id }}
            )

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)
// router.post('/adding_member',
//     async(req, res) => {
//         try{
//             console.log('Body: ', req.body)

//             const {full_name, age} = req.body

//             const member = new Member({full_name: full_name, age: age})

//             await member.save()

//             res.status(201).json({message: 'Добавление прошло успешно'})
//         }catch(e){
//             res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
//         }
//     }
// )


router.post('/search_member',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {full_name, age} = req.body

            await Member.findOne({age}, function(err, result){
                console.log(result);
            })

            res.status(201).json({message: 'Поиск+'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)


// router.post('/update_member',
//     async(req, res) => {
//         try{
//             console.log('Body: ', req.body)

//             const {full_name, age} = req.body

//             await Member.updateMany({age: age}, {full_name: "Update request"}, function(err, result){
//                 console.log(result);
//             });

//             res.status(201).json({message: 'Обновление'})
//         }catch(e){
//             res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
//         }
//     }
// )

router.post('/delete_member',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {full_name, age} = req.body

            await Member.deleteMany({age: age}, function(err, result){
                console.log(result);
            });

            res.status(201).json({message: 'Удаление'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)




// Test //////////////////////////////////////////////////////////

router.post('/adding_member_id',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {full_name, age} = req.body

            User.
            findOne({ title: 'Casino Royale' }).
            populate('author').
            exec(function (err, story) {
              if (err) return handleError(err);
              console.log('The author is %s', story.author.name);
              // prints "The author is Ian Fleming"
            });




            let useData_id = JSON.parse(localStorage.getItem('useData'))

// const member = new Member({full_name: full_name, age: age, owner: useData_id.userId})
            const member = new Member({full_name: full_name, age: age})

            await member.save()

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)


router.post('/search_user_id',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {useData_id: useData_id} = req.body
            let id = useData_id

            const search = await User.findOne(id)

            console.log(search)

            res.status(201).json({message: 'Поиск по id выполнен успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post('/adding_key',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            // const {full_name, age, useData_id: useData_id} = req.body
            // let id = useData_id
            const {full_name, age} = req.body

            // User.find( { $or:[ {'_id':objId}, {'name':param}, {'nickname':param} ]}, 
            // function(err,docs){
            //   if(!err) res.send(docs);
            // })
            // let id_member = 

let test_variable
let useData_id = JSON.parse(localStorage.getItem('useData')).userId
//Поиск или
// test_variable = await Member.find({$or: [{'full_name': full_name}, {'age': age}]})
//Поиск и
test_variable = await Member.findOne({$and: [{'full_name': full_name}, {'age': age}]})
test_variable = test_variable.id
console.log(test_variable)


            await Member.updateMany({test_variable}, {owner: useData_id}, function(err, result){
                console.log(result);
            });

            res.status(201).json({message: 'Добавляем ключ для member'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

//////////////////////////////

router.post('/adding_member_input',
    async(req, res) => {
        try{
            console.log('Body: ', req.body)

            const {full_name, age, rank, owner: owner} = req.body

            const member = new Member({full_name: full_name, age: age, rank: rank, owner: owner})

            member.save(function(err, room) {
                member_id = room.id
                console.log(member_id)
                console.log(typeof member_id)
            })

            let id = mongoose.Types.ObjectId(owner)

            await User.updateOne(
                {id},
                { $push: { links: member.id }}
            )

            res.status(201).json({message: 'Добавление прошло успешно'})
        }catch(e){
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)






module.exports = router