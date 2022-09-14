const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://code@cluster0.pwve9tv.mongodb.net/studens?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))



const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(require('./routes/students.routes'))


app.listen(port, () => {
    console.log('Порт запущен http://localhost:' + port);
})

