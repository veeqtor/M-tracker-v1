import express from 'express';

import requestController from '../controllers/requestsController';

const router = express.Router();

router.get('/', requestController.get_all_requests);

router.get('/:requestId', requestController.get_a_request);

router.post('/', requestController.create_a_request);

router.put('/:requestId', requestController.modify_a_request);

router.delete('/:requestId', requestController.delete_a_request);


export default router;

