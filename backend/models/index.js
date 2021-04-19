const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = Schema ([
    {
        "user" : String,
        "email" : String, 
        "pass" : String
    }
]);

module.exports = mongoose.model('Project', projectSchema);