const httpStatus = require('http-status');
const { Adashe } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} adasheBody
 * @returns {Promise<User>}
 */
const createAdashe = async (adasheBody) => {
  return Adashe.create(adasheBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {number} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAdashes = async (filter, options) => {
  const adashes = await Adashe.paginate(filter, options);
  return adashes;
};

/**
 * Get Adashe by id
 * @param {ObjectId} id
 * @returns {Promise<Adashe>}
 */
const getAdasheById = async (id) => {
  return Adashe.findById(id);
};

// /**
//  * Get user by email
//  * @param {string} email
//  * @returns {Promise<User>}
//  */
// const getUserByEmail = async (email) => {
//   return User.findOne({ email });
// };

 /**
 * Update user by id
 * @param {ObjectId} adasheId
 * @param {Object} updateBody
 * @returns {Promise<Adashe>}
 */
const joinAdasheById = async (adasheId, updateBody) => {
  const adashe = await getAdasheById(adasheId);
  if (!adashe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Adashe not found');
  }

  //if group full dont
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

// /**
//  * Delete user by id
//  * @param {ObjectId} userId
//  * @returns {Promise<User>}
//  */
// const deleteUserById = async (userId) => {
//   const user = await getUserById(userId);
//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//   }
//   await user.remove();
//   return user;
// };

module.exports = {
  createAdashe,
  queryAdashes,
  getAdasheById,
  // getUserByEmail,
  joinAdasheById,
  // deleteUserById,
};
