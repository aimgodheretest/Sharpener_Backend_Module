const Students = require("./studentsTable");
const Identitycard = require("./identityCardTable");
const department = require("./departmentTable");

//one to one association.
Students.hasOne(Identitycard);
Identitycard.belongsTo(Students);

//one to many association.
department.hasMany(Students);
Students.belongsTo(department);

module.exports = {
  Students,
  Identitycard,
};
