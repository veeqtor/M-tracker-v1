import express from 'express';

import requestController from '../controllers/requestsController';

const router = express.Router();

router.get('/', requestController.get_all_requests);

export default router;

