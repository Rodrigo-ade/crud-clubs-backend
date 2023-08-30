import express from 'express';
import {
  getClubs,
  getClub,
  deleteClub,
  createClub,
  updateClub,
} from './handlers/index.js';

const router = express.Router();
export default router;

router.get('/teams', getClubs);
router.get('/teams/:teamTla', getClub);
router.delete('/teams/:teamTla', deleteClub);
router.post('/teams', createClub);
router.put('/teams', updateClub);
