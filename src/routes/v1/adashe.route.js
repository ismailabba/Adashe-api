const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const adasheValidation = require('../../validations/adashe.validation');
const adasheController = require('../../controllers/adashe.controller');

const router = express.Router();

router
  .route('/')
  .post( auth('manageAdashe'), validate(adasheValidation.createAdashe), adasheController.createAdashe)
  .get(auth('getAdashes'), validate(adasheValidation.getAdashes), adasheController.getAdashes);

router
  .route('/:adasheId')
  .get(auth('getAdashes'), validate(adasheValidation.getAdashe), adasheController.getAdashe)
  .patch(auth('joinAdashe'), validate(adasheValidation.joinAdashe), adasheController.joinAdashe)


module.exports = router;

