const Students = require("./studentsTable");
const Identitycard = require("./identityCardTable");
const department = require("./departmentTable");
const courses = require("./coursesTable");
const studentCoursesJunction = require("./studentCoursesJunction");

//one to one association.
Students.hasOne(Identitycard);
Identitycard.belongsTo(Students);

//one to many association.
department.hasMany(Students);
Students.belongsTo(department);

//many to many courses
Students.belongsToMany(courses, { through: studentCoursesJunction });
courses.belongsToMany(Students, { through: studentCoursesJunction });

module.exports = {
  Students,
  Identitycard,
  courses,
  studentCoursesJunction,
};
