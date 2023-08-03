import express from 'express';
import {
  createOccupation, getAllOccupations, getOccupationsByName, aggregatesOccupations,
  getOccupationsAndProjects
} from "../controllers/occupation.controllers.js";

const router = express.Router();

router.post('/occupation', createOccupation);
router.get('/allOccupations', getAllOccupations);
router.get('/occupationsName', getOccupationsByName);
router.get('/aggregatesOccupations', aggregatesOccupations);
router.get('/occupationsAndProjects', getOccupationsAndProjects);

export default router;
