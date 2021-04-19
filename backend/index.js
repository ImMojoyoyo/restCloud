const mongoose = require('mongoose');
const app = require('./app');


const port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/usuarios', {useNewUrlParser: true})
        .then( () => {
            app.listen( port, () => {
                console.log('Servidor corriendo en red local');
            })
        })
        .catch( err => console.log(err));