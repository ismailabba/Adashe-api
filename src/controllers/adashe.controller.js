const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { adasheService } = require('../services');

const createAdashe = catchAsync(async (req, res) => {
  const adashe = await adasheService.createAdashe(req.body);
  res.status(httpStatus.CREATED).send(adashe);
});

const getAdashes = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['obligation', 'noOfPeople']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await adasheService.queryAdashes(filter, options);
  res.send(result);
});

const getAdashe = catchAsync(async (req, res) => {
  const adashe = await adasheService.getAdasheById(req.params.adasheId);
  if (!adashe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Adashe not found');
  }
  res.send(adashe);
});

const joinAdashe = catchAsync(async (req, res) => {
  const adashe = await adasheService.joinAdasheById(req.params.adasheId, req.body);
  res.send(adashe);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAdashe,
  getAdashes,
  getAdashe,
  joinAdashe
  // updateUser,
  // deleteUser,
};
