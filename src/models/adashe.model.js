const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const {sessions} = require('../config/sessions');

const {schedules} = require('../config/schedules');

const adasheSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true,},
    startDate: {type: Date,required: true},
    endDate: { type: Date, required: true},
    noOfPeople:{ type: Number, required: true},
    obligation: { type: Number, required: true},
    takeHomePay: { type: Number, required: true},
    members: {type: [String], default: [] },
    session: { type: String, enum: sessions, default: 'notStarted'},
    schedules: { type: String, enum: schedules},
    currentStage: { type: Number, default: 0 },
    noOfPayed: { type: Number, default: 0 },
    noOfCollected: { type: Number, default: 0 },
    collected: {type: [String], default: [] },
    payed: {type: Map, of: [String], default:{
      github: ['vkarpov15', 'notrffr'],
      twitter: ['@code_barbarian', '44fcdd3']
    }},
    nextPaymentDate: {type: Date},
    collectingNext: { type: String},
    
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
adasheSchema.plugin(toJSON);
adasheSchema.plugin(paginate);


/**
 * @typedef Adashe
 */
const Adashe = mongoose.model('Adashe', adasheSchema);

module.exports = Adashe;
