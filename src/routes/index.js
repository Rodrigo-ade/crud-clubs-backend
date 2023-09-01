import express from 'express';
import multer from 'multer';

import {
  getClubs,
  getClub,
  deleteClub,
  createClub,
  updateClub,
} from './handlers/index.js';

const upload = multer({ dest: 'src/data/uploads' });
const router = express.Router();

router.get('/clubs', getClubs);
router.get('/clubs/:clubTla', getClub);
router.delete('/clubs/:clubTla', deleteClub);
router.post('/clubs', upload.single('crestUrl'), createClub);
router.put('/clubs/:clubTla', upload.single('crestUrl'), updateClub);

export default router;
