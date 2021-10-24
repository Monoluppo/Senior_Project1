import express from 'express';

import { getSites, createSite} from '../controllers/sites.js'
const router = express.Router();

router.get('/',getSites);
router.post('/',createSite);
export default router;