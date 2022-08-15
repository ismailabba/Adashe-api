const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const faker = require('faker');
const User = require('../../src/models/user.model');

const password = 'password1';
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const userOne = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
  isEmailVerified: false,
  phoneNumber: 1111111111 ,
  bvn: 2222222222,
  nin: 3333333333 ,
  phoneNumberVerified: false,
  bvnVerified: false,
  ninVerified: false,
};

const userTwo = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
  isEmailVerified: false,
  phoneNumber: 4444444444 ,
  bvn: 5555555555 ,
  nin: 6666666666,
  phoneNumberVerified: false,
  bvnVerified: false,
  ninVerified: false,
};

const admin = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'admin',
  isEmailVerified: false,
  phoneNumber: 7777777777 ,
  bvn: 8888888888 ,
  nin: 9999999999 ,
  phoneNumberVerified: false,
  bvnVerified: false,
  ninVerified: false,
};

const insertUsers = async (users) => {
  await User.insertMany(users.map((user) => ({ ...user, password: hashedPassword })));
};

module.exports = {
  userOne,
  userTwo,
  admin,
  insertUsers,
};
