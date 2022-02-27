import express from 'express';
import loginController from '../controllers/loginController';
const router = express.Router();

router.get('/start-session', loginController.startSession);

export = router;