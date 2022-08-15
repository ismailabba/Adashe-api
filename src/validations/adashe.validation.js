const Joi = require('joi');
const { objectId } = require('./custom.validation');


const createAdashe = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    startDate: Joi.date().raw().required(),
    endDate: Joi.date().raw().required(),
    noOfPeople: Joi.number().integer().required(),
    obligation: Joi.number().integer().required(),
    takeHomePay: Joi.number().integer().required(),
    schedules: Joi.string().required().valid('daily', 'weekly', 'monthly'),
    // members: Joi.array().items(Joi.string()),
    // noOfPayed: Joi.number().integer().required(),
    // noOfCollected: Joi.number().integer().required(),
    // collected: Joi.array().items(Joi.string()),
    // payed: Joi.array().items(Joi.string()),
    // nextPaymentDate: Joi.date().raw().required(),
    // collectingNext: Joi.string().required(),

  }),
};

const getAdashes = {
  query: Joi.object().keys({
    name: Joi.string(),
    startDate: Joi.date().raw(),
    endDate:Joi.date().raw(),
    noOfPeople: Joi.number().integer(),
    obigation: Joi.number().integer(),
    takeHomePay: Joi.number().integer(),
    members: Joi.array().items(Joi.string()),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAdashe = {
  params: Joi.object().keys({
    adasheId: Joi.string().custom(objectId),
  }),
};

const joinAdashe = {
  params: Joi.object().keys({
    adasheId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      userId: Joi.string(),
    })
    .min(1),
};

// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
  createAdashe,
  getAdashes,
  getAdashe,
  joinAdashe

 
};
