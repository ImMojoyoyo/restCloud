const express = require('express');
const ProjectController = require('../controllers/index');

const router = express.Router();

router.post('/save-users', ProjectController.saveUsers);
router.get('/get-users', ProjectController.getUsers);

module.exports = router;