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

router.get('/clubs', getClubs);
router.get('/clubs/:clubTla', getClub);
router.delete('/clubs/:teamTla', deleteClub);
router.post('/clubs', createClub);
router.put('/clubs', updateClub);
