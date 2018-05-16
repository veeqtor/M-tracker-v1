import express from 'express';

import requestController from '../controllers/requestsController';

const router = express.Router();

router.get('/', requestController.get_all_requests);

router.get('/:requestId', requestController.get_a_request);

router.post('/', requestController.create_a_request);

export default router;

