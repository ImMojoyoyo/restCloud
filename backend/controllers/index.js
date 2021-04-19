// Libraries
const validator = require('validator'); 


const Project = require('../models/index');

const controller = {

    saveUsers: (req, res) => {
        
        const params = req.body;

        
        try{
            const validate_user = !validator.isEmpty(params.user);
            const validate_email = !validator.isEmpty(params.email);
            const validate_pass = !validator.isEmpty(params.pass);

            if( validate_user && validate_email && validate_pass){
                
                const project = new Project();
                
                
                project.user = params.user;
                project.email = params.email;
                project.pass = params.pass;

                
                project.save( (err, projectStored) =>{
                    if( err || projectStored ){
                        return res.status(404).send({
                            "status" : "Error",
                            "message" : "Not saved"
                        });
                    }
                    return res.status(200).send({
                            "status" : "Success",
                            "message" : "Save it",
                            "datas" : projectStored
                    })

                });

                return res.status(200).send({
                    "status" : "success",
                    "message" : "All the validatios are OK",
                    "project" : project
                    
                })

            }else{

                return res.status(404).send({
                    "status" : "problem",
                    "problem" : "Validation mistake!"
                })

            }

        }catch{

            return res.status(404).send({
                "status" : "Err",
                "message" : "Need more datas!"
            });

        }   
    },
    getUsers : (req, res) => {
        // Find ()
        Project.find({}).exec( (err, users) => {
            if(err){
                return res.status(500).send({
                    "status" : "error",
                    "message" : "Error to find a user"
                });
            }
            if(!users){
                return res.status(404).send({
                    "status" : "error",
                    "message" : "No datas in database"
                });
            }
            return res.status(200).send({
                "status" : "succes",
                "project" : users
            });
        });
    }


}

module.exports = controller;