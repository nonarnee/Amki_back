import express from 'express';
import wordsetController from "../controllers/wordset.controller";

const router = express.Router();

router.get('/wordset', wordsetController.getWordset);
router.get('/wordset/:wordset_id', wordsetController.getWordsetById);

export default router;
