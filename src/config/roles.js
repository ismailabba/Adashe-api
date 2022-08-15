const allRoles = {
  user: ['getAdashes', 'joinAdashe'],
  admin: ['getUsers', 'manageUsers', 'manageAdashe', 'getAdashes' ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
