import express from 'express';
import searchController from '../app/controllers/SearchController';
const router = express.Router();

router.get('/data', searchController.searchData);
router.get('/', searchController.index); // để cuối để nó đi qua các tuyến đường khác ở phía trên

export default router;
