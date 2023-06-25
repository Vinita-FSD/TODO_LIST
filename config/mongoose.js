const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mauryavinita069:vinita@123@cluster0.ouhyhfy.mongodb.net/');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})